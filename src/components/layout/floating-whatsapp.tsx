import { schoolInfo } from "@/content/school";
import { WhatsAppGlyph } from "@/components/graphics/icons";

export function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${schoolInfo.whatsappRaw}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with the school on WhatsApp"
      className="fixed bottom-5 right-5 z-30 inline-flex h-12 w-12 items-center justify-center rounded-full border border-line bg-paper text-navy shadow-plinth transition-colors duration-300 hover:bg-navy hover:text-paper"
    >
      <WhatsAppGlyph className="h-5 w-5" />
    </a>
  );
}
