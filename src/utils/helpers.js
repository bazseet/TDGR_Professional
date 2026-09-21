import { business } from '../data/business';

export function formatPrice(amount) {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
}

export function getWhatsAppLink(customMessage) {
  const message = customMessage || business.whatsappMessage;
  const encoded = encodeURIComponent(message);
  return `https://wa.me/2348140987655?text=${encoded}`;
}

export function getPhoneLink() {
  return `tel:+2348140987655`;
}

export function getMailtoLink() {
  return `mailto:${business.email}`;
}

export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
