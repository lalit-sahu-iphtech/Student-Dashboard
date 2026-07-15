//Har student ki ek row render karta hai.

import { useState } from "react";
import Modal from "../Modal";
import StudentForm from "./StudentForm";

export default function StudentCard({ student, deleteStudent, updateStudent }) {
  
  const [open, setOpen] = useState(false);

  return (
    <>
      <tr>
        <td data-label="Name">{student.name}</td>

        <td data-label="Email">{student.email}</td>

        <td data-label="City">{student.city || student.address?.city}</td>

        <td data-label="Status">
          <span className="status-badge active">
            {student.status || "Active"}
          </span>
        </td>

        <td data-label="Action">
          <div className="table-actions">
            <button className="edit-btn" onClick={() => setOpen(true)}>
              Edit
            </button>

            <button
              className="delete-btn"
              onClick={() => deleteStudent(student.id)}
            >
              Delete
            </button>
          </div>
        </td>
      </tr>

      {open && (
        <Modal close={() => setOpen(false)}>
          <StudentForm
            addStudent={(data) => {
              updateStudent(student.id, data);

              setOpen(false);
            }}
          />
        </Modal>
      )}
    </>
  );
}
