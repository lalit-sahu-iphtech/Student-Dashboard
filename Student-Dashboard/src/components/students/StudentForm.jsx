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
      <div className="form-group">
        <input
          className="form-input"
          placeholder="Name"
          {...register("name")}
        />

        <span className="error">{errors.name?.message}</span>
      </div>

      <div className="form-group">
        <input
          className="form-input"
          placeholder="Email"
          {...register("email")}
        />

        <span className="error">{errors.email?.message}</span>
      </div>

      <div className="form-group">
        <input
          className="form-input"
          placeholder="City"
          {...register("city")}
        />
      </div>

      <div className="form-group">
        <select className="form-input" {...register("status")}>
          <option value="Active">Active</option>

          <option value="Inactive">Inactive</option>
        </select>
      </div>

      <button className="add-btn" type="submit">
        Add Student
      </button>
    </form>
  );
}
