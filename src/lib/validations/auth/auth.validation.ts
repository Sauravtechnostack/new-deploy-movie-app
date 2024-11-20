import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email("Please provide a valid email").min(1, "Email is required"),
  password: z.string().min(6, "Password must be at least 6 characters").min(1, "Password is required"),
  rememberMe: z.boolean().optional()
});

export const registerSchema = z.object({
  email: z.string().email("Please provide a valid email").min(1, "Email is required"),
  password: z.string().min(6, "Password must be at least 6 characters").min(1, "Password is required"),
  confirmPassword: z.string().min(1, "Confirm password is required"),
});

export type LoginSchema = z.infer<typeof loginSchema>;
export type RegisterSchema = z.infer<typeof registerSchema>;