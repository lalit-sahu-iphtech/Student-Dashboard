import { useState, useContext } from "react";

import useStudents from "../hooks/useStudents";

import StudentForm from "../components/students/StudentForm";

import StudentTable from "../components/students/StudentTable";

import Filter from "../components/students/Filter";

import Pagination from "../components/students/Pagination";

import Loader from "../components/Loader";

import { SearchContext } from "../context/SearchContext";

export default function Students() {
  const {
    students = [],
    loading,
    error,
    deleteStudent,
    updateStudent,
    addStudent,
  } = useStudents();

  const { search } = useContext(SearchContext);

  const [city, setCity] = useState("");

  const [status, setStatus] = useState("");

  const [page, setPage] = useState(1);

  const limit = 5;

  // Filter + Search + Sort

  const filteredStudent = students

    .filter((student) =>
      student.name.toLowerCase().includes(search.toLowerCase())
    )

    .filter((student) => (city ? student.address.city === city : true))

    .filter((student) => (status ? student.status === status : true))

    .sort((a, b) => a.name.localeCompare(b.name));

  // Pagination

  const start = (page - 1) * limit;

  const paginationStudents = filteredStudent.slice(start, start + limit);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      <h1>Students</h1>

      <StudentForm addStudent={addStudent} />

      <Filter students={students} setCity={setCity} setStatus={setStatus} />

      <StudentTable
        students={paginationStudents}
        deleteStudent={deleteStudent}
        updateStudent={updateStudent}
      />

      <br />

      <Pagination
        page={page}
        setPage={setPage}
        total={Math.ceil(filteredStudent.length / limit)}
      />
    </div>
  );
}
