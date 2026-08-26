export interface WhatsAppTrackData {
  name?: string;
  city?: string;
  whatsappNumber?: string;
}

/**
 * Generates a clean, encoded WhatsApp direct chat link.
 */
export function createWhatsAppLink(name?: string, city?: string, whatsappNumber?: string): string {
  const number = (whatsappNumber || "919905752614").replace(/[^+\d]/g, "");
  const profileName = name || "Companion";
  const profileCity = city ? ` in ${city}` : "";
  const text = encodeURIComponent(`Hi, I am interested in booking ${profileName}${profileCity} via priyaescortservices.com`);
  return `https://wa.me/${number}?text=${text}`;
}

/**
 * Handles analytics tracking for WhatsApp click events safely.
 */
export function trackWhatsAppClick(data: WhatsAppTrackData): void {
  try {
    if (typeof window !== "undefined" && typeof (window as unknown as { gtag?: Function }).gtag === "function") {
      (window as unknown as { gtag: Function }).gtag("event", "whatsapp_click", {
        event_category: "WhatsApp",
        event_label: `${data.name || "Unknown"} - ${data.city || "Unknown"}`,
        value: data.whatsappNumber || "919905752614",
      });
    }
  } catch (error) {
    console.error("Tracking WhatsApp click error:", error);
  }
}
