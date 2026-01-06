import z from "zod";

export const checkoutSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  address: z.string().min(10, "Address must be at least 10 characters"),
  phone: z.string().regex(/^\+?[0-9]{10,}$/, "Invalid phone number"),
});
