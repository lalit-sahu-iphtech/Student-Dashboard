import {useState} from "react"
import Modal from "../Modal"
import StudentForm from "./StudentForm"
export default function StudentCard({
    student,
    deleteStudent,
    updateStudent
}){
    const[open, setOpen] = useState(false);
    return(
        <>

<tr>
            <td>{student.name}</td>
            <td>{student.email}</td>
            <td>{student.city || student.address?.city}</td>
            <td>{student.status || "Active"}</td>

            <td>
                <button onClick={()=>setOpen(true)}> Edit</button>
            </td>
         <td>
         <button onClick={()=>deleteStudent(student.id)}>Delete</button> 
        </td>            
        </tr>

        {
            open && <Modal close={()=>setOpen(false)}>
            <StudentForm addStudent={(data)=>{
                updateStudent(student.id,data);
                setOpen(false);
            }}
            />
            </Modal>
        }
        </>
    
       
    )
}