import { schoolInfo } from "@/content/school";

export function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${schoolInfo.whatsappRaw}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-lg font-bold text-white ring-4 ring-[#25D366]/20 transition-colors hover:bg-[#1fba59]"
    >
      WA
    </a>
  );
}
