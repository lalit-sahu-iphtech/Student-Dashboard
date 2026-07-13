// Student API Hook

import { useEffect, useState } from "react";
import api from "../api/axiosInstance";

export default function useStudents(){
    const[students, setStudents] = useState([]);
    const[loading, setLoading] = useState(false);
    const[error, setError] = useState(null);
    
    const getStudents = async()=>{
        try{
            setLoading(true);

            const response = await api.get("/users");
            setStudents(response.data);
        }
        catch(err){
            setError("Failed to fetch students")
        }
        finally{
            setLoading(false);
        }
    }
    useEffect(()=>{
        getStudents();
    },[]);

    //ADD STUDENT
    const addStudent = (student)=>{
        setStudents([...students, {id:Date.now(), ...student}])
    }

    // DELETE STUDENT
    const  deleteStudent = (id)=>{
        setStudents(students.filter(student=>student.id !==id))
    }

    // UPDATE STUDENT
    
  const updateStudent=(id, data)=>{
    setStudents(students.map(student=>student.id === id? {
        ...student, ...data
    } : student))

  }
  return{
    students,loading, addStudent, deleteStudent,updateStudent
  }
}