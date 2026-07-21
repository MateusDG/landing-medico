import type { Metadata } from "next";
import Link from "next/link";
import { DOCTOR, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Privacidade | Dr. Leandro Batisti",
  description:
    "Saiba como os dados são tratados ao navegar pelo site e entrar em contato com a equipe do Dr. Leandro Batisti.",
  alternates: {
    canonical: "/privacidade",
  },
};

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <div className="legal-shell">
        <Link className="legal-back" href="/">
          ← Voltar para o site
        </Link>

        <p className="eyebrow">Privacidade e transparência</p>
        <h1>Política de Privacidade</h1>
        <p className="legal-updated">Última atualização: 21 de julho de 2026.</p>

        <section>
          <h2>1. Sobre este site</h2>
          <p>
            Esta página apresenta informações institucionais e profissionais do {DOCTOR.name}.
            Ela não oferece diagnóstico, atendimento de urgência nem substitui uma consulta médica.
          </p>
        </section>

        <section>
          <h2>2. Dados coletados</h2>
          <p>
            O site não possui formulário próprio e não solicita que você informe sintomas,
            diagnósticos, exames ou outros dados de saúde. O provedor de hospedagem pode registrar
            informações técnicas essenciais, como endereço IP, navegador, data e horário de acesso,
            para segurança e funcionamento do serviço.
          </p>
        </section>

        <section>
          <h2>3. Contato pelo WhatsApp</h2>
          <p>
            Ao selecionar um botão de WhatsApp, você será direcionado a um serviço externo. Os dados
            enviados nesse ambiente são tratados também conforme os termos e políticas da Meta.
            No primeiro contato, envie apenas informações necessárias para agenda e atendimento.
            Evite compartilhar exames ou dados de saúde até receber orientação da equipe sobre o canal adequado.
          </p>
        </section>

        <section>
          <h2>4. Mapas e links externos</h2>
          <p>
            Links de rota direcionam ao Google Maps. Ao acessar serviços de terceiros, suas próprias
            políticas de privacidade e uso de dados passam a ser aplicáveis.
          </p>
        </section>

        <section>
          <h2>5. Cookies e métricas</h2>
          <p>
            Esta versão do site não utiliza cookies publicitários nem formulários de captação. Caso
            ferramentas de métricas ou publicidade sejam adicionadas futuramente, esta política e os
            mecanismos de consentimento deverão ser atualizados antes da ativação.
          </p>
        </section>

        <section>
          <h2>6. Seus direitos</h2>
          <p>
            A Lei Geral de Proteção de Dados garante direitos de confirmação, acesso, correção,
            eliminação e outras solicitações aplicáveis ao tratamento de dados pessoais. Para falar
            com a equipe sobre privacidade, use o canal abaixo.
          </p>
          <a
            className="button button-primary"
            href={whatsappUrl("Olá, gostaria de falar com a equipe sobre privacidade e dados pessoais.")}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar com a equipe sobre privacidade pelo WhatsApp; abre em nova aba"
          >
            Falar com a equipe
          </a>
        </section>

        <aside>
          <strong>{DOCTOR.name}</strong>
          <span>MÉDICO · {DOCTOR.crm}</span>
          <span>{DOCTOR.specialty} · {DOCTOR.cardiovascularRqe}</span>
        </aside>
      </div>
    </main>
  );
}
