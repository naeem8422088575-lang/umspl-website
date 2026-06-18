import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { COMPANY_METADATA } from "./constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateSecureWhatsAppLink(context: string, rank?: string): string {
  var baseMessage;
  if (rank) {
    baseMessage = "Hello " + COMPANY_METADATA.abbreviation + " Recruitment, I am inquiring about the " + rank + " position.";
  } else {
    baseMessage = "Hello " + COMPANY_METADATA.abbreviation + " Recruitment, I am reaching out regarding maritime opportunities.";
  }

  var safePayload = encodeURIComponent(baseMessage + " Context: " + context);
  var safeNumber = COMPANY_METADATA.whatsapp.replace(/[^0-9]/g, '');

  return "https://wa.me/" + safeNumber + "?text=" + safePayload;
}
