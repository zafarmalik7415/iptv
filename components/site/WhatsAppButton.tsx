import { contact, whatsappLink } from "@/lib/content";

/**
 * Floating WhatsApp chat button, fixed to the bottom right on every page.
 * Icon only on phones, icon plus label on wider screens. Opens WhatsApp
 * (app or web) with a prefilled message.
 */
export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with us on WhatsApp at ${contact.whatsappDisplay}`}
      className="group fixed bottom-4 right-4 z-[70] flex items-center gap-2 rounded-full bg-[#25D366] p-3 text-[#0a0a0c] shadow-lg shadow-black/40 transition-transform hover:scale-105 focus-visible:scale-105 sm:bottom-6 sm:right-6 sm:py-3 sm:pl-3 sm:pr-4"
    >
      <span className="relative flex h-6 w-6 items-center justify-center">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/40 opacity-60" />
        <svg
          viewBox="0 0 32 32"
          className="relative h-6 w-6"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.745 3.047 9.377L1.05 31.3l6.13-1.96A15.9 15.9 0 0 0 16.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0Zm9.31 22.594c-.386 1.09-1.918 1.994-3.14 2.258-.836.178-1.928.32-5.604-1.204-4.7-1.948-7.726-6.724-7.962-7.034-.226-.31-1.9-2.53-1.9-4.826 0-2.296 1.166-3.424 1.636-3.904.386-.394.98-.574 1.55-.574.184 0 .35.01.5.016.44.02.66.046.95.74.362.87 1.242 3.166 1.348 3.388.108.222.216.522.066.832-.14.32-.264.454-.486.708-.222.254-.432.45-.654.722-.204.238-.434.492-.178.932.256.43 1.138 1.876 2.446 3.04 1.688 1.502 3.078 1.976 3.562 2.178.36.15.79.114 1.052-.168.334-.36.744-.958 1.162-1.548.296-.42.67-.472 1.062-.324.4.14 2.53 1.192 2.964 1.408.434.216.722.32.83.5.106.184.106 1.048-.28 2.14Z" />
        </svg>
      </span>
      <span className="hidden text-sm font-semibold sm:inline">
        Chat on WhatsApp
      </span>
    </a>
  );
}
