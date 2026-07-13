// ZOD validation for data

import {z} from "zod";

export const studentSchema = z.object({
    name:z.string().min(3, "Name minimum 3 characters"),
    email : z.string().email("Invalid Email"),
    city : z.string().min(2, "City required"),

    status:z.string()
})