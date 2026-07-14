import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { studentSchema } from "../../schema/StudentSchema";

export default function StudentForm({ addStudent }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(studentSchema),
  });

  const submit = (data) => {
    addStudent(data);

    reset();
  };

  return (
    <form className="student-form" onSubmit={handleSubmit(submit)}>
      <input placeholder="Name" {...register("name")} />

      <p>{errors.name?.message}</p>
       
       
      <input className="form-input" placeholder="Email" {...register("email")} />

      <p>{errors.email?.message}</p>

      <input  className="form-input" placeholder="City" {...register("city")} />

      <select {...register("status")}>
        <option value="Active">Active</option>

        <option value="Inactive">Inactive</option>
      </select>

      <button className="add-btn"
>Add Student</button>
    </form>
  );
}
