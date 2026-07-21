import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dr. Leandro Batisti — Cirurgia Cardiovascular",
    short_name: "Dr. Leandro Batisti",
    description:
      "Informações profissionais e locais de atendimento do Dr. Leandro Batisti.",
    start_url: "/",
    display: "standalone",
    background_color: "#f4f1eb",
    theme_color: "#f4f1eb",
    lang: "pt-BR",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
