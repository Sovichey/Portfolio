/**
 * EmailJS Configuration
 * 
 * This file centralizes EmailJS setup. Update with your credentials from:
 * https://www.emailjs.com
 */

export const emailConfig = {
  // Get these from your EmailJS Account
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '',
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
  
  // Email where you want to receive messages
  recipientEmail: process.env.NEXT_PUBLIC_RECIPIENT_EMAIL || 'your-email@example.com',
}

/**
 * Validate that all required EmailJS config is set
 */
export function isEmailConfigured(): boolean {
  return !!(
    emailConfig.publicKey &&
    emailConfig.serviceId &&
    emailConfig.templateId &&
    emailConfig.recipientEmail
  )
}

/**
 * Get missing config fields for debugging
 */
export function getMissingEmailConfig(): string[] {
  const missing = []
  if (!emailConfig.publicKey) missing.push('NEXT_PUBLIC_EMAILJS_PUBLIC_KEY')
  if (!emailConfig.serviceId) missing.push('NEXT_PUBLIC_EMAILJS_SERVICE_ID')
  if (!emailConfig.templateId) missing.push('NEXT_PUBLIC_EMAILJS_TEMPLATE_ID')
  if (!emailConfig.recipientEmail) missing.push('NEXT_PUBLIC_RECIPIENT_EMAIL')
  return missing
}
