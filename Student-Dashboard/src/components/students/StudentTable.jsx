// sare student ko table me display krega

//her row student card render kregi
import StudentCard from "./StudentCard";

export default function StudentTable({
    students,
    deleteStudent,
    updateStudent
}){
    return(
       <div className="table-container">
         <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>City</th>
                    <th>Status</th>
                    <th>Action</th>
                    



                </tr>
            </thead>
            <tbody>
                {students.map(student=>(
                    <StudentCard key={student.id}
                       student={student}
                       deleteStudent={deleteStudent}
                       updateStudent={updateStudent}/>
                ))}
            </tbody>
        </table>
       </div>
    )
}