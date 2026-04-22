import { z } from "zod";

// Base schemas for the template
export const UserSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  image: z.string().optional(),
});

export type User = z.infer<typeof UserSchema>;
