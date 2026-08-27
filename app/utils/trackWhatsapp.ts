export interface WhatsAppTrackData {
  name?: string;
  city?: string;
  whatsappNumber?: string;
}

/**
 * Generates a clean, encoded WhatsApp direct chat link for CalGirl Anjali.
 */
export function createWhatsAppLink(name?: string, city?: string, whatsappNumber?: string): string {
  const number = (whatsappNumber || "918294107610").replace(/[^+\d]/g, "");
  const profileName = name || "Companion";
  const profileCity = city ? ` in ${city}` : "";
  const text = encodeURIComponent(`Hi, I am interested in booking ${profileName}${profileCity} via calgirlanjali`);
  return `https://wa.me/${number}?text=${text}`;
}

/**
 * Handles analytics tracking and triggers email notification for WhatsApp click events.
 */
export function trackWhatsAppClick(data: WhatsAppTrackData): void {
  try {
    // 1. Google Analytics tracking if gtag is available
    if (typeof window !== "undefined" && typeof (window as unknown as { gtag?: Function }).gtag === "function") {
      (window as unknown as { gtag: Function }).gtag("event", "whatsapp_click", {
        event_category: "WhatsApp",
        event_label: `${data.name || "Unknown"} - ${data.city || "Unknown"}`,
        value: data.whatsappNumber || "918294107610",
      });
    }

    // 2. Trigger email notification via API route
    if (typeof window !== "undefined") {
      fetch("/api/whatsapp-click", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name || "General Inquiry",
          city: data.city || "General",
          whatsappNumber: data.whatsappNumber || "918294107610",
        }),
      }).catch((error) => {
        console.error("Failed to send WhatsApp click tracking email:", error);
      });
    }
  } catch (error) {
    console.error("Tracking WhatsApp click error:", error);
  }
}
