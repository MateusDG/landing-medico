"use client";

import { useEffect, useState } from "react";

type MobileWhatsAppCtaProps = {
  href: string;
};

export function MobileWhatsAppCta({ href }: MobileWhatsAppCtaProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("inicio");

    if (!hero) {
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;

      if (entry) {
        setIsVisible(!entry.isIntersecting);
      }
    });

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      className={`mobile-whatsapp${isVisible ? " is-visible" : ""}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Solicitar agendamento pelo WhatsApp; abre em nova aba"
      aria-hidden={!isVisible}
      tabIndex={isVisible ? undefined : -1}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.3-4.7a8.5 8.5 0 1 1 16.2-4.1Z" />
        <path d="M8.3 7.8c.2-.4.4-.4.7-.4h.4c.2 0 .4.1.5.5l.7 1.7c.1.3 0 .5-.1.7l-.6.7c-.2.2-.1.4 0 .6.5.9 1.2 1.7 2.1 2.2.3.2.5.2.7 0l.8-1c.2-.2.4-.3.7-.2l1.8.8c.3.2.5.3.5.5 0 .2-.2 1.4-.8 1.9-.6.5-1.3.7-2.1.5-1.1-.3-2.7-1-4.2-2.3-1.2-1.1-2-2.4-2.3-3.4-.3-.8 0-1.9.4-2.5l.8-.3Z" />
      </svg>
      Solicitar agendamento
    </a>
  );
}
