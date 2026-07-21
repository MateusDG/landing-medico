import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { DOCTOR, LOCATIONS, SITE_URL, whatsappUrl } from "@/lib/site";
import certificateImage from "../../public/images/certificado-cirurgia-hq.webp";
import hospitalImage from "../../public/images/hospital-ufes-hq.webp";
import portraitImage from "../../public/images/dr-leandro-portrait.webp";

const services = [
  {
    number: "01",
    title: "Avaliação em cirurgia cardiovascular",
    text: "Revisão do histórico clínico e dos exames disponíveis para avaliar a necessidade e o momento da cirurgia.",
  },
  {
    number: "02",
    title: "Segunda opinião especializada",
    text: "Revisão independente do diagnóstico e da indicação cirúrgica antes de uma decisão.",
  },
  {
    number: "03",
    title: "Preparação para a cirurgia",
    text: "Orientações sobre exames, preparo, internação e recuperação esperada.",
  },
  {
    number: "04",
    title: "Seguimento após a cirurgia",
    text: "Avaliação da evolução e das necessidades de cada fase da recuperação.",
  },
];

const careSteps = [
  {
    number: "01",
    title: "Histórico clínico",
    text: "Sintomas, tratamentos anteriores e objetivos da consulta são revistos em conjunto.",
  },
  {
    number: "02",
    title: "Exames disponíveis",
    text: "Laudos e imagens são analisados no contexto do quadro clínico.",
  },
  {
    number: "03",
    title: "Conduta e acompanhamento",
    text: "A indicação, as alternativas e as próximas etapas são explicadas em linguagem compreensível.",
  },
];

const qualifications = [
  {
    date: "2004—2010",
    title: "Medicina",
    place: "Universidade Federal do Espírito Santo · UFES",
  },
  {
    date: "2010—2012",
    title: "Cirurgia Geral",
    place: `Hospital das Clínicas · USP · ${DOCTOR.generalSurgeryRqe}`,
  },
  {
    date: "2012—2016",
    title: "Cirurgia Cardiovascular",
    place: `Instituto do Coração · InCor / USP · ${DOCTOR.cardiovascularRqe}`,
  },
  {
    date: "2018",
    title: "Título de especialista",
    place: "SBCCV · Associação Médica Brasileira",
  },
];

const testimonials = [
  {
    quote:
      "Não canso de lhe agradecer por todo tempo que esteve junto de nós [...] mesmo sem as respostas que eu buscava, conseguia me tranquilizar.",
    attribution: "Mãe de paciente",
  },
  {
    quote: "Obrigado por sua atenção e pelo carinho dedicado ao meu filho.",
    attribution: "Familiares de paciente",
  },
];

const faqs = [
  {
    question: "Como agendar uma consulta?",
    answer:
      "Envie uma mensagem pelo WhatsApp. A equipe informa os horários, as modalidades disponíveis e confirma o endereço do atendimento.",
  },
  {
    question: "O que levar na primeira consulta?",
    answer:
      "A equipe orientará no agendamento. Em geral, é útil ter documento de identificação, lista de medicamentos em uso e exames ou relatórios médicos já disponíveis.",
  },
  {
    question: "Posso solicitar uma segunda opinião?",
    answer:
      "Sim. A consulta pode revisar o diagnóstico, os exames e a indicação de cirurgia antes de uma decisão.",
  },
  {
    question: "Onde são realizados os atendimentos?",
    answer:
      "Há atendimento no Instituto do Coração em Campo Grande, Cariacica, e no Shopping Vila Velha, em Vila Velha. Os endereços e rotas estão nesta página.",
  },
  {
    question: "O atendimento é particular ou por convênio?",
    answer:
      "As condições variam conforme a unidade. Confirme as modalidades disponíveis diretamente com a equipe.",
  },
];

const physicianSchema = {
  "@context": "https://schema.org",
  "@type": "Physician",
  "@id": `${SITE_URL}/#medico`,
  name: DOCTOR.name,
  url: SITE_URL,
  image: `${SITE_URL}/images/dr-leandro-portrait.webp`,
  telephone: DOCTOR.phoneInternational,
  medicalSpecialty: "Cardiovascular",
  areaServed: ["Cariacica", "Vila Velha", "Espírito Santo"],
  identifier: [
    {
      "@type": "PropertyValue",
      name: "CRM",
      value: DOCTOR.crm,
    },
    {
      "@type": "PropertyValue",
      name: "RQE — Cirurgia Cardiovascular",
      value: DOCTOR.cardiovascularRqe,
    },
  ],
  address: LOCATIONS.map((location) => ({
    "@type": "PostalAddress",
    streetAddress: location.street,
    addressLocality: location.city,
    addressRegion: "ES",
    postalCode: location.postalCode,
    addressCountry: "BR",
  })),
};

const physicianSchemaJson = JSON.stringify(physicianSchema)
  .replace(/</g, "\\u003c")
  .replace(/>/g, "\\u003e")
  .replace(/&/g, "\\u0026");

export default function Home() {

  return (
    <>
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: physicianSchemaJson }}
      />

      <SiteHeader />

      <main id="conteudo" tabIndex={-1}>
        <HeroSection />

        <section className="section services-section" id="atuacao" aria-labelledby="services-title">
          <div className="section-width">
            <div className="section-heading split-heading reveal">
              <div>
                <p className="eyebrow">Motivos para consulta</p>
                <h2 id="services-title">Quando procurar um cirurgião cardiovascular</h2>
              </div>
              <p>
                A avaliação pode esclarecer uma indicação cirúrgica, revisar exames e
                orientar o preparo ou a recuperação após o procedimento.
              </p>
            </div>

            <div className="services-grid">
              {services.map((service) => (
                <article className="service-card reveal" key={service.number}>
                  <div className="service-number">{service.number}</div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <span className="card-line" aria-hidden="true" />
                </article>
              ))}
            </div>

          </div>
        </section>

        <section className="section about-section" id="sobre" aria-labelledby="about-title">
          <div className="about-grid section-width">
            <figure className="about-media reveal">
              <div className="about-photo about-photo-main">
                <Image
                  src={hospitalImage}
                  alt="Fachada do Hospital Universitário da Universidade Federal do Espírito Santo"
                  fill
                  placeholder="blur"
                  sizes="(max-width: 780px) 92vw, 560px"
                />
              </div>
              <div className="about-photo about-photo-detail">
                <Image
                  src={certificateImage}
                  alt="Certificado de residência médica em Cirurgia Cardiovascular emitido pela Faculdade de Medicina da USP"
                  fill
                  placeholder="blur"
                  sizes="(max-width: 780px) 48vw, 300px"
                />
              </div>
              <figcaption className="about-caption">
                <span>Formação médica</span>
                <strong>UFES · USP · InCor</strong>
              </figcaption>
            </figure>

            <div className="about-copy reveal">
              <p className="eyebrow">Sobre o médico</p>
              <h2 id="about-title">Formação em cirurgia cardiovascular pela USP e pelo InCor</h2>
              <p className="about-intro">
                Graduado em Medicina pela UFES, o Dr. Leandro Batisti concluiu residência
                em Cirurgia Geral no Hospital das Clínicas da USP e formação em Cirurgia
                Cardiovascular no Instituto do Coração — InCor.
              </p>
              <p>
                Possui título de especialista pela SBCCV e pela AMB, integra a World
                Society for Pediatric and Congenital Heart Surgery e tem capacitação em
                ECMO pela ELSO.
              </p>

              <ol className="qualification-list" aria-label="Formação acadêmica e títulos">
                {qualifications.map((item) => (
                  <li key={`${item.date}-${item.title}`}>
                    <time>{item.date}</time>
                    <div>
                      <strong>{item.title}</strong>
                      <span>{item.place}</span>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="care-section" aria-labelledby="care-title">
          <div className="section-width">
            <div className="care-heading reveal">
              <p className="eyebrow eyebrow-light">Durante a consulta</p>
              <h2 id="care-title">Como a avaliação é organizada</h2>
            </div>

            <ol className="care-steps">
              {careSteps.map((step) => (
                <li className="reveal" key={step.number}>
                  <span>{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section testimonials-section" id="relatos" aria-labelledby="testimonials-title">
          <div className="section-width">
            <div className="testimonials-heading reveal">
              <div>
                <p className="eyebrow">Experiências compartilhadas</p>
                <h2 id="testimonials-title">Relatos sobre o atendimento</h2>
              </div>
              <p>
                Trechos de mensagens espontâneas publicadas anteriormente, apresentados
                sem identificação pessoal e sem referência a resultado clínico.
              </p>
            </div>

            <div className="testimonials-grid">
              {testimonials.map((testimonial) => (
                <figure className="testimonial-card reveal" key={testimonial.quote}>
                  <span className="quote-mark" aria-hidden="true">
                    “
                  </span>
                  <blockquote>{testimonial.quote}</blockquote>
                  <figcaption>{testimonial.attribution}</figcaption>
                </figure>
              ))}
            </div>

            <p className="testimonial-disclaimer">
              Cada pessoa e cada quadro clínico são únicos. Relatos não representam
              promessa ou garantia de resultado.
            </p>
          </div>
        </section>

        <section className="section locations-section" id="unidades" aria-labelledby="locations-title">
          <div className="section-width">
            <div className="section-heading split-heading locations-heading reveal">
              <div>
                <p className="eyebrow">Locais de atendimento</p>
                <h2 id="locations-title">Consultórios em Cariacica e Vila Velha</h2>
              </div>
              <p>
                Consulte com a equipe os horários e as modalidades disponíveis em cada
                endereço.
              </p>
            </div>

            <div className="locations-grid">
              {LOCATIONS.map((location, index) => (
                <article className="location-card reveal" key={location.id}>
                  <div className="location-topline">
                    <span>0{index + 1}</span>
                    <span>{location.city}</span>
                  </div>
                  <MapPinIcon />
                  <h3>{location.name}</h3>
                  <address>
                    {location.street}
                    <br />
                    {location.district}
                    <br />
                    CEP {location.postalCode}
                  </address>
                  <a
                    className="location-link"
                    href={location.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Abrir rota para ${location.name} no Google Maps`}
                  >
                    Abrir rota no mapa
                    <ArrowUpRight />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section faq-section" aria-labelledby="faq-title">
          <div className="faq-layout section-width">
            <div className="faq-intro reveal">
              <p className="eyebrow">Antes da consulta</p>
              <h2 id="faq-title">Dúvidas frequentes</h2>
              <p>Informações sobre agendamento, documentos e locais de atendimento.</p>
            </div>

            <div className="faq-list">
              {faqs.map((faq) => (
                <details className="faq-item reveal" key={faq.question}>
                  <summary>
                    <span>{faq.question}</span>
                    <span className="faq-icon" aria-hidden="true" />
                  </summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <aside className="urgent-notice section-width" aria-label="Aviso sobre urgências">
          <div className="urgent-icon" aria-hidden="true">
            <HeartIcon />
          </div>
          <p>
            <strong>Em caso de urgência:</strong> este canal não é pronto atendimento.
            Procure um serviço de emergência ou ligue para o SAMU no número 192.
          </p>
        </aside>

        <section className="final-cta" aria-labelledby="final-cta-title">
          <div className="final-cta-inner section-width reveal">
            <p className="eyebrow eyebrow-light">Contato e agendamento</p>
            <h2 id="final-cta-title">Solicite uma consulta</h2>
            <p>
              A equipe informa os horários, as modalidades e os endereços disponíveis.
            </p>
            <div className="final-actions">
              <a
                className="button button-light"
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Solicitar agendamento pelo WhatsApp; abre em nova aba"
              >
                Solicitar agendamento
                <ArrowUpRight />
              </a>
              <a className="final-phone" href={`tel:${DOCTOR.phoneInternational.replace(/[^\d+]/g, "")}`}>
                {DOCTOR.phoneDisplay}
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />

      <a
        className="mobile-whatsapp"
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Solicitar agendamento pelo WhatsApp; abre em nova aba"
      >
        <WhatsAppIcon />
        Solicitar agendamento
      </a>
    </>
  );
}

function HeroSection() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="hero-grid section-width">
        <div className="hero-copy reveal">
          <p className="eyebrow">Dr. Leandro Batisti · CRM-ES 9.973 · RQE 11.811</p>
          <h1 id="hero-title">Cirurgião cardiovascular no Espírito Santo</h1>
          <p className="hero-lede">
            Avaliação de indicação cirúrgica, segunda opinião e acompanhamento antes e depois da
            cirurgia, com atendimento em Cariacica e Vila Velha.
          </p>

          <p className="hero-proof">
            Formação médica: <strong>UFES · HC-USP · InCor-USP</strong>
          </p>

          <div className="hero-actions">
            <a
              className="button button-primary"
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Solicitar agendamento pelo WhatsApp; abre em nova aba"
            >
              Solicitar agendamento
              <ArrowUpRight />
            </a>
            <a className="text-link" href="#unidades">
              Ver consultórios
              <ArrowDown />
            </a>
          </div>

          <p className="contact-note">
            <LockIcon />
            Primeiro contato apenas para informações e agenda. Evite enviar exames ou dados de
            saúde pelo WhatsApp.
          </p>
        </div>

        <div className="hero-visual reveal" aria-label="Identificação profissional">
          <div className="portrait-frame">
            <Image
              src={portraitImage}
              alt="Dr. Leandro Batisti sentado em seu consultório"
              fill
              priority
              placeholder="blur"
              sizes="(max-width: 780px) 92vw, (max-width: 1180px) 46vw, 560px"
              className="portrait-image"
            />
            <span className="portrait-ring" aria-hidden="true" />
          </div>

          <div className="identity-card">
            <p>{DOCTOR.name}</p>
            <span>MÉDICO · {DOCTOR.crm}</span>
            <span>
              {DOCTOR.specialty} · {DOCTOR.cardiovascularRqe}
            </span>
          </div>

          <div className="location-chip">
            <MapPinIcon />
            Cariacica · Vila Velha
          </div>
        </div>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid section-width">
        <div className="footer-brand">
          <Image src="/images/logo-leandro.webp" alt="" width={52} height={52} sizes="52px" />
          <div>
            <strong>{DOCTOR.shortName}</strong>
            <span>{DOCTOR.specialty}</span>
          </div>
        </div>

        <div className="footer-identification">
          <p>{DOCTOR.name}</p>
          <span>MÉDICO · {DOCTOR.crm}</span>
          <span>
            {DOCTOR.specialty} · {DOCTOR.cardiovascularRqe}
          </span>
        </div>

        <div className="footer-links">
          <Link href="/privacidade">Política de privacidade</Link>
          <a href="#inicio">Voltar ao início ↑</a>
        </div>
      </div>
      <div className="footer-bottom section-width">
        <span>
          © {new Date().getFullYear()} {DOCTOR.shortName}. Todos os direitos reservados.
        </span>
        <span>Conteúdo institucional. Não substitui avaliação médica.</span>
      </div>
    </footer>
  );
}

function ArrowUpRight() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M4 12 12 4M5 4h7v7" />
    </svg>
  );
}

function ArrowDown() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M8 2v11M3.5 8.5 8 13l4.5-4.5" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg className="map-pin" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <rect x="4" y="8" width="12" height="9" rx="2" />
      <path d="M7 8V6a3 3 0 0 1 6 0v2" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.8 5.7a5.4 5.4 0 0 0-7.7 0L12 6.8l-1.1-1.1a5.4 5.4 0 0 0-7.7 7.7L12 22l8.8-8.6a5.4 5.4 0 0 0 0-7.7Z" />
      <path d="M3.8 12h4l1.4-3.2 2.3 6.1 1.8-4 1 1.1h5.8" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.3-4.7a8.5 8.5 0 1 1 16.2-4.1Z" />
      <path d="M8.3 7.8c.2-.4.4-.4.7-.4h.4c.2 0 .4.1.5.5l.7 1.7c.1.3 0 .5-.1.7l-.6.7c-.2.2-.1.4 0 .6.5.9 1.2 1.7 2.1 2.2.3.2.5.2.7 0l.8-1c.2-.2.4-.3.7-.2l1.8.8c.3.2.5.3.5.5 0 .2-.2 1.4-.8 1.9-.6.5-1.3.7-2.1.5-1.1-.3-2.7-1-4.2-2.3-1.2-1.1-2-2.4-2.3-3.4-.3-.8 0-1.9.4-2.5l.8-.3Z" />
    </svg>
  );
}
