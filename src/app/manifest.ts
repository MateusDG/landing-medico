import type { MetadataRoute } from "next";
import { BASE_PATH } from "@/lib/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dr. Leandro Batisti — Cirurgia Cardiovascular",
    short_name: "Dr. Leandro Batisti",
    description:
      "Informações profissionais e locais de atendimento do Dr. Leandro Batisti.",
    start_url: `${BASE_PATH}/`,
    display: "standalone",
    background_color: "#f4f1eb",
    theme_color: "#f4f1eb",
    lang: "pt-BR",
    icons: [
      {
        src: `${BASE_PATH}/icon.svg`,
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
