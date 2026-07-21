export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://leandrobatisti.com.br"
).replace(/\/$/, "");

export const DOCTOR = {
  name: "Dr. Leandro Batisti de Faria",
  shortName: "Dr. Leandro Batisti",
  crm: "CRM-ES 9.973",
  generalSurgeryRqe: "RQE 11.810",
  cardiovascularRqe: "RQE 11.811",
  specialty: "Cirurgia Cardiovascular",
  phoneDisplay: "(27) 99661-7730",
  phoneInternational: "+55 27 99661-7730",
} as const;

export const WHATSAPP_NUMBER = "5527996617730";
export const WHATSAPP_MESSAGE =
  "Olá, gostaria de solicitar informações para uma consulta com o Dr. Leandro Batisti.";

export const whatsappUrl = (message = WHATSAPP_MESSAGE) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const LOCATIONS = [
  {
    id: "cariacica",
    city: "Cariacica",
    name: "Instituto do Coração — Campo Grande",
    street: "Av. Presidente Dutra, 38",
    district: "Campo Grande, Cariacica — ES",
    postalCode: "29146-140",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Av.%20Presidente%20Dutra%2038%20Campo%20Grande%20Cariacica%20ES",
  },
  {
    id: "vila-velha",
    city: "Vila Velha",
    name: "Instituto do Coração — Shopping Vila Velha",
    street: "Av. Luciano das Neves, 2418",
    district: "Divino Espírito Santo, Vila Velha — ES",
    postalCode: "29107-900",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Av.%20Luciano%20das%20Neves%202418%20Vila%20Velha%20ES",
  },
] as const;
