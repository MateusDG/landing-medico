"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AccessibilityTools } from "@/components/AccessibilityTools";
import { whatsappUrl } from "@/lib/site";

const navigation = [
  { label: "Consultas", href: "#atuacao" },
  { label: "Sobre o médico", href: "#sobre" },
  { label: "Relatos", href: "#relatos" },
  { label: "Consultórios", href: "#unidades" },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href="#inicio" aria-label="Dr. Leandro Batisti — início">
          <span className="brand-mark" aria-hidden="true">
            <Image
              src="/images/logo-leandro.webp"
              alt=""
              width={48}
              height={48}
              sizes="48px"
            />
          </span>
          <span className="brand-copy">
            <strong>Dr. Leandro Batisti</strong>
            <span>Cirurgia Cardiovascular</span>
          </span>
        </Link>

        <div className="header-actions">
          <AccessibilityTools />

          <button
            className="menu-toggle"
            type="button"
            ref={menuButtonRef}
            aria-expanded={isOpen}
            aria-controls="main-navigation"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setIsOpen((value) => !value)}
          >
            <span />
            <span />
          </button>

          <div className={`header-navigation ${isOpen ? "is-open" : ""}`} id="main-navigation">
            <nav aria-label="Navegação principal">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
                  {item.label}
                </Link>
              ))}
            </nav>

            <a
              className="button button-sm button-primary header-cta"
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Solicitar agendamento pelo WhatsApp; abre em nova aba"
            >
              Solicitar agendamento
              <ArrowUpRight />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

function ArrowUpRight() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M4 12 12 4M5 4h7v7" />
    </svg>
  );
}
