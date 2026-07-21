# Landing page — Dr. Leandro Batisti

Landing page institucional para o Dr. Leandro Batisti de Faria, médico com atuação em cirurgia cardiovascular no Espírito Santo.

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- CSS responsivo sem dependência de JavaScript para o conteúdo principal
- `next/image` e `next/font` para otimização de imagens e fontes

## Desenvolvimento

```bash
npm ci
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Verificações antes de publicar

```bash
npm run lint
npx tsc --noEmit --incremental false
npm run build
```

O build estático é gerado em `out/`.

## GitHub Pages

Pushes para a branch `main` publicam automaticamente o site em:

```text
https://mateusdg.github.io/landing-medico/
```

No GitHub, selecione **Settings → Pages → Build and deployment → GitHub
Actions**. O workflow `.github/workflows/deploy-pages.yml` configura o caminho
`/landing-medico`, gera a exportação estática e publica a pasta `out/`.

## Configuração

Os dados centrais ficam em `src/lib/site.ts`:

- URL canônica
- identificação profissional
- WhatsApp e mensagem inicial
- unidades e rotas

O domínio padrão é `https://leandrobatisti.com.br`. Em ambientes de homologação, defina:

```bash
NEXT_PUBLIC_SITE_URL=https://seu-dominio-de-homologacao.com
```

## SEO e produção

O projeto inclui metadata, canonical, imagem social 1200 × 630, Open Graph, Twitter Card, JSON-LD `Physician`, `robots.txt`, `sitemap.xml`, manifest, favicon e uma política de privacidade. Para produção, use uma hospedagem compatível com Next.js 16, como a Vercel, e aponte o domínio principal após validar a versão publicada.

Antes da troca de domínio/hospedagem, preserve ou redirecione individualmente páginas antigas que ainda recebam tráfego. Não faça redirecionamentos genéricos de artigos para a home.

Depois da publicação, valide o domínio no Google Search Console, envie o sitemap e mantenha nome, telefone e endereços coerentes com o Perfil da Empresa no Google.

## Acessibilidade

A página foi estruturada para WCAG 2.2 nível AA, com navegação por teclado, link para pular ao conteúdo, foco visível, alvos de toque amplos, hierarquia semântica e suporte a movimento reduzido. O menu “Acessibilidade” oferece preferências persistentes de texto maior, alto contraste e redução de movimento.

Esses controles complementam — e não substituem — a acessibilidade nativa. Antes do lançamento, faça uma rodada manual com teclado, zoom de 200%, leitor de tela e contraste forçado.

## Imagens e relatos

As imagens do hospital e do certificado foram reconvertidas a partir dos arquivos de maior resolução publicados no domínio anterior. O retrato principal permaneceu autêntico, sem reconstrução facial por IA. Confirme os direitos de uso do retrato, do certificado e da fotografia institucional antes do lançamento.

A seção de relatos usa dois trechos sóbrios já publicados no site anterior, sem nome, fotografia, diagnóstico ou menção a resultado. Antes de mantê-la no site público:

- obtenha autorização específica e documentada para os trechos;
- registre canal, finalidade, prazo e forma de revogação;
- confirme o enquadramento com a Codame/CRM-ES;
- remova a seção se a autorização não puder ser comprovada.

## Checklist editorial obrigatório

Antes do lançamento definitivo, o médico responsável deve confirmar:

- grafia do nome, CRM e RQEs;
- títulos, sociedades e capacitações citados;
- serviços efetivamente oferecidos;
- telefone, endereços, CEPs e modalidades das duas unidades;
- autorização e enquadramento dos relatos reproduzidos;
- direitos de uso das fotografias e do certificado;
- aprovação final da comunicação conforme a Resolução CFM nº 2.336/2023.

O primeiro contato do WhatsApp é propositalmente neutro e não solicita dados clínicos.
