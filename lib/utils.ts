export function generateSecureWhatsAppLink(context: string, rank?: string): string {
  const baseMessage = rank 
    ? Hello ${COMPANY_METADATA.abbreviation} Recruitment, I am inquiring about the ${rank} position.
    : Hello ${COMPANY_METADATA.abbreviation} Recruitment, I am reaching out regarding maritime opportunities.;
  
  const safePayload = encodeURIComponent(${baseMessage} Context: ${context});
  const safeNumber = COMPANY_METADATA.whatsapp.replace(/[^0-9]/g, '');
  
  return https://wa.me/${safeNumber}?text=${safePayload};
}
