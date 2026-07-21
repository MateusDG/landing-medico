"use client";

import { useEffect, useRef, useState } from "react";

type Preferences = {
  largerText: boolean;
  highContrast: boolean;
  reduceMotion: boolean;
};

const DEFAULT_PREFERENCES: Preferences = {
  largerText: false,
  highContrast: false,
  reduceMotion: false,
};

const STORAGE_KEY = "leandro-batisti-accessibility";

function applyPreferences(preferences: Preferences) {
  const root = document.documentElement;

  root.toggleAttribute("data-larger-text", preferences.largerText);
  root.toggleAttribute("data-high-contrast", preferences.highContrast);
  root.toggleAttribute("data-reduce-motion", preferences.reduceMotion);
}

export function AccessibilityTools() {
  const [isOpen, setIsOpen] = useState(false);
  const [preferences, setPreferences] = useState<Preferences>(DEFAULT_PREFERENCES);
  const [isReady, setIsReady] = useState(false);
  const [announcement, setAnnouncement] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const restorePreferences = window.setTimeout(() => {
      let restored = DEFAULT_PREFERENCES;

      try {
        const saved = window.localStorage.getItem(STORAGE_KEY);
        const parsed = saved ? (JSON.parse(saved) as Partial<Preferences>) : {};
        restored = { ...DEFAULT_PREFERENCES, ...parsed };
      } catch {
        // Invalid or unavailable storage falls back to the accessible default theme.
      }

      setPreferences(restored);
      applyPreferences(restored);
      setIsReady(true);
    }, 0);

    return () => window.clearTimeout(restorePreferences);
  }, []);

  useEffect(() => {
    if (!isReady) return;

    applyPreferences(preferences);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
    } catch {
      // The preferences still work for the current visit when storage is unavailable.
    }
  }, [isReady, preferences]);

  useEffect(() => {
    if (!isOpen) return;

    const closePanel = (event: KeyboardEvent | PointerEvent) => {
      if (event instanceof KeyboardEvent && event.key === "Escape") {
        setIsOpen(false);
        triggerRef.current?.focus();
        return;
      }

      if (
        event instanceof PointerEvent &&
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", closePanel);
    window.addEventListener("pointerdown", closePanel);

    return () => {
      window.removeEventListener("keydown", closePanel);
      window.removeEventListener("pointerdown", closePanel);
    };
  }, [isOpen]);

  const updatePreference = (key: keyof Preferences, label: string) => {
    const nextValue = !preferences[key];
    setPreferences((current) => ({ ...current, [key]: nextValue }));
    setAnnouncement(`${label} ${nextValue ? "ativado" : "desativado"}.`);
  };

  const resetPreferences = () => {
    setPreferences(DEFAULT_PREFERENCES);
    setAnnouncement("Preferências de acessibilidade restauradas.");
  };

  const hasActivePreference = Object.values(preferences).some(Boolean);

  return (
    <div className="accessibility-tools" ref={containerRef}>
      <button
        className="accessibility-trigger"
        type="button"
        ref={triggerRef}
        aria-label={`${isOpen ? "Fechar" : "Abrir"} preferências de acessibilidade`}
        aria-expanded={isOpen}
        aria-controls="accessibility-panel"
        onClick={() => setIsOpen((value) => !value)}
      >
        <span className="accessibility-trigger-icon" aria-hidden="true">
          Aa
        </span>
        <span>Acessibilidade</span>
      </button>

      <section
        className="accessibility-panel"
        id="accessibility-panel"
        aria-labelledby="accessibility-title"
        hidden={!isOpen}
      >
        <div className="accessibility-panel-heading">
          <div>
            <span>Preferências de leitura</span>
            <strong id="accessibility-title">Ajuste a apresentação</strong>
          </div>
          <button
            className="accessibility-close"
            type="button"
            aria-label="Fechar preferências de acessibilidade"
            onClick={() => {
              setIsOpen(false);
              triggerRef.current?.focus();
            }}
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>

        <div className="accessibility-options">
          <button
            className="accessibility-option"
            type="button"
            aria-pressed={preferences.largerText}
            onClick={() => updatePreference("largerText", "Texto maior")}
          >
            <span>
              <strong>Texto maior</strong>
              <small>Aumenta fontes e espaçamento</small>
            </span>
            <span className="accessibility-switch" aria-hidden="true" />
          </button>

          <button
            className="accessibility-option"
            type="button"
            aria-pressed={preferences.highContrast}
            onClick={() => updatePreference("highContrast", "Alto contraste")}
          >
            <span>
              <strong>Alto contraste</strong>
              <small>Reforça cores e contornos</small>
            </span>
            <span className="accessibility-switch" aria-hidden="true" />
          </button>

          <button
            className="accessibility-option"
            type="button"
            aria-pressed={preferences.reduceMotion}
            onClick={() => updatePreference("reduceMotion", "Movimento reduzido")}
          >
            <span>
              <strong>Reduzir movimento</strong>
              <small>Desativa transições decorativas</small>
            </span>
            <span className="accessibility-switch" aria-hidden="true" />
          </button>
        </div>

        <button
          className="accessibility-reset"
          type="button"
          disabled={!hasActivePreference}
          onClick={resetPreferences}
        >
          Restaurar padrão
        </button>
      </section>

      <p className="sr-only" aria-live="polite" aria-atomic="true">
        {announcement}
      </p>
    </div>
  );
}
