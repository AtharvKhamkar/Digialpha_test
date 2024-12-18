import { z } from "zod";

const registrationSchema = z.object({
  firstName: z
    .string({ required_error: "firstName is required" })
    .trim()
    .min(3, { message: "firstName must be greater than 3 characters" })
    .max(255, "firstName must not be greater than 255 characters"),
  lastName: z
    .string({ required_error: "lastName is required" })
    .trim()
    .min(3, { message: "lastName must be greater than 3 characters" })
    .max(255, "lastName must not be greater than 255 characters"),
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid Email" })
    .min(3, { message: "Email must be greater than 3 characters" })
    .max(255, { message: "Email must not be greater than 255 characters" }),
});

export { registrationSchema };
