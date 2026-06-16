import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { COMPANY_METADATA } from "./constants";

/**
 * Utility to merge Tailwind CSS classes dynamically without style conflicts.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Safely encodes user input to prevent URL injection or malformed WhatsApp queries.
 */
export function generateSecureWhatsAppLink(context: string, rank?: string): string {
  const baseMessage = rank 
    ? Hello ${COMPANY_METADATA.abbreviation} Recruitment, I am inquiring about the ${rank} position.
    : Hello ${COMPANY_METADATA.abbreviation} Recruitment, I am reaching out regarding maritime opportunities.;
  
  const safePayload = encodeURIComponent(${baseMessage} Context: ${context});
  const safeNumber = COMPANY_METADATA.whatsapp.replace(/[^0-9]/g, '');
  
  return https://wa.me/${safeNumber}?text=${safePayload};
}
