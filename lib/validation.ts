import { z } from 'zod';

export const ApplicationSchema = z.object({
  fullName: z.string().min(2, "Full name is required").max(100),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Valid phone number required"),
  rank: z.string().min(2, "Rank designation is required"),
  experience: z.coerce.number().min(0, "Invalid experience value").max(600),
  passport: z.string().regex(/^[A-Z0-9]{7,9}$/i, "Invalid passport format"),
  cdc: z.string().regex(/^[A-Z0-9\/\-]{5,15}$/i, "Invalid CDC format"),
  resume: z.string().url("Valid URL required").regex(/^https:\/\//i, "HTTPS URL required"),
});