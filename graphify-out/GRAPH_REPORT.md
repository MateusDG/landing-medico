# Graph Report - C:\Users\mateu\Desktop\landing  (2026-07-21)

## Corpus Check
- Corpus is ~13,692 words - fits in a single context window. You may not need a graph.

## Summary
- 161 nodes · 184 edges · 13 communities
- Extraction: 94% EXTRACTED · 5% INFERRED · 1% AMBIGUOUS · INFERRED: 10 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Landing e Conversão|Landing e Conversão]]
- [[_COMMUNITY_Estratégia SEO Médica|Estratégia SEO Médica]]
- [[_COMMUNITY_Configuração TypeScript|Configuração TypeScript]]
- [[_COMMUNITY_Next.js e Metadados|Next.js e Metadados]]
- [[_COMMUNITY_Qualidade e Tipagem|Qualidade e Tipagem]]
- [[_COMMUNITY_Dependências do Projeto|Dependências do Projeto]]
- [[_COMMUNITY_Inclusões TypeScript|Inclusões TypeScript]]
- [[_COMMUNITY_Formação Cardiovascular|Formação Cardiovascular]]
- [[_COMMUNITY_Regras Next.js|Regras Next.js]]
- [[_COMMUNITY_Identidade do Favicon|Identidade do Favicon]]
- [[_COMMUNITY_Marca Cardiovascular|Marca Cardiovascular]]
- [[_COMMUNITY_Retrato Profissional|Retrato Profissional]]
- [[_COMMUNITY_Unidade Hospitalar UFES|Unidade Hospitalar UFES]]

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `Dr. Leandro Batisti Landing Page` - 11 edges
3. `whatsappUrl()` - 7 edges
4. `include` - 7 edges
5. `Next.js` - 7 edges
6. `Certificado de Residência Médica em Cirurgia Cardiovascular` - 6 edges
7. `scripts` - 5 edges
8. `SITE_URL` - 5 edges
9. `SEO and Production Configuration` - 5 edges
10. `DOCTOR` - 4 edges

## Surprising Connections (you probably didn't know these)
- `Consult Bundled Next.js Documentation Before Coding` --conceptually_related_to--> `Next.js 16 App Router`  [INFERRED]
  AGENTS.md → README.md
- `AGENTS.md Rules Reference` --references--> `Next.js Agent Rules`  [EXTRACTED]
  CLAUDE.md → AGENTS.md
- `Home()` --calls--> `whatsappUrl()`  [EXTRACTED]
  src/app/page.tsx → src/lib/site.ts
- `PrivacyPage()` --calls--> `whatsappUrl()`  [EXTRACTED]
  src/app/privacidade/page.tsx → src/lib/site.ts
- `SiteHeader()` --calls--> `whatsappUrl()`  [EXTRACTED]
  src/components/SiteHeader.tsx → src/lib/site.ts

## Import Cycles
- 1-file cycle: `eslint.config.mjs -> eslint.config.mjs`
- 1-file cycle: `next.config.ts -> next.config.ts`
- 1-file cycle: `src/app/layout.tsx -> src/app/layout.tsx`
- 1-file cycle: `src/app/page.tsx -> src/app/page.tsx`
- 2-file cycle: `src/app/page.tsx -> src/components/SiteHeader.tsx -> src/app/page.tsx`

## Hyperedges (group relationships)
- **Landing Page Technology Stack** — readme_dr_leandro_batisti_landing_page, readme_nextjs_16_app_router, readme_react_19, readme_typescript, readme_responsive_css, readme_next_image, readme_next_font [EXTRACTED 1.00]
- **SEO and Production Delivery Suite** — readme_seo_and_production, readme_social_and_search_metadata, readme_physician_json_ld, readme_vercel_hosting, readme_individual_legacy_page_redirects [EXTRACTED 1.00]
- **Favicon Visual Composition** — app_icon_abstract_interlocking_loop_favicon, app_icon_rounded_cream_square, app_icon_overlapping_elliptical_rings, app_icon_coral_and_navy_palette [EXTRACTED 1.00]

## Communities (13 total, 0 thin omitted)

### Community 0 - "Landing e Conversão"
Cohesion: 0.12
Nodes (15): careSteps, credentials, faqs, Home(), services, timeline, navigation, SiteHeader() (+7 more)

### Community 1 - "Estratégia SEO Médica"
Cohesion: 0.10
Nodes (21): Avoid Clinical Data Collection During Initial Contact, Canonical Domain leandrobatisti.com.br, Cardiovascular Surgery, Central Site Configuration in src/lib/site.ts, CFM Resolution No. 2.336/2023, Dr. Leandro Batisti de Faria, Dr. Leandro Batisti Landing Page, Mandatory Editorial Verification (+13 more)

### Community 2 - "Configuração TypeScript"
Cohesion: 0.10
Nodes (21): Dom, Dom Iterable, Esnext, Src, compilerOptions, allowJs, esModuleInterop, incremental (+13 more)

### Community 3 - "Next.js e Metadados"
Cohesion: 0.12
Nodes (9): manrope, metadata, newsreader, viewport, Global Stylesheet, Google Fonts, SITE_URL, Next.js (+1 more)

### Community 4 - "Qualidade e Tipagem"
Cohesion: 0.12
Nodes (16): Config, Next.js Core Web Vitals, Eslint, eslintConfig, ESLint Config Next.js, devDependencies, eslint, eslint-config-next (+8 more)

### Community 5 - "Dependências do Projeto"
Cohesion: 0.12
Nodes (16): dependencies, next, react, react-dom, name, overrides, postcss, private (+8 more)

### Community 6 - "Inclusões TypeScript"
Cohesion: 0.20
Nodes (9): Mts, Next Dev @Types/Ts, Next Env D Ts, Next @Types/Ts, Node Modules, Ts, Tsx, exclude (+1 more)

### Community 7 - "Formação Cardiovascular"
Cohesion: 0.43
Nodes (7): Certificado de Residência Médica em Cirurgia Cardiovascular, Cirurgia Cardiovascular, CNRM/MEC, Credencial Profissional Médica, Faculdade de Medicina, Residência Médica, Universidade de São Paulo

### Community 8 - "Regras Next.js"
Cohesion: 0.40
Nodes (6): Breaking Next.js API and Convention Changes, Consult Bundled Next.js Documentation Before Coding, Next.js Agent Rules, Next.js Deprecation Notices, AGENTS.md Rules Reference, Next.js 16 App Router

### Community 9 - "Identidade do Favicon"
Cohesion: 0.40
Nodes (5): Abstract Interlocking Loop Favicon, Possible Cardiovascular Symbolism, Coral and Navy Ring Palette, Two Overlapping Tilted Elliptical Rings, Rounded Cream Square Background

### Community 10 - "Marca Cardiovascular"
Cohesion: 0.60
Nodes (5): Circulação Arterial e Venosa, Coração Estilizado, Curvas Vermelhas e Azuis Entrelaçadas, Identidade Visual Cardiovascular, Logo Leandro

### Community 11 - "Retrato Profissional"
Cohesion: 0.50
Nodes (4): Clinical Workspace, Dr. Leandro, Physician, Dr. Leandro Portrait

### Community 12 - "Unidade Hospitalar UFES"
Cohesion: 0.67
Nodes (4): Emergency Care, Hospital UFES Exterior, Hospital UFES, Unidade de Emergência

## Ambiguous Edges - Review These
- `Abstract Interlocking Loop Favicon` → `Possible Cardiovascular Symbolism`  [AMBIGUOUS]
  src/app/icon.svg · relation: conceptually_related_to

## Knowledge Gaps
- **74 isolated node(s):** `eslintConfig`, `nextConfig`, `name`, `version`, `private` (+69 more)
  These have ≤1 connection - possible missing edges or undocumented components.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `Abstract Interlocking Loop Favicon` and `Possible Cardiovascular Symbolism`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **Why does `devDependencies` connect `Qualidade e Tipagem` to `Dependências do Projeto`?**
  _High betweenness centrality (0.085) - this node is a cross-community bridge._
- **Why does `Next.js` connect `Next.js e Metadados` to `Landing e Conversão`, `Dependências do Projeto`?**
  _High betweenness centrality (0.077) - this node is a cross-community bridge._
- **What connects `eslintConfig`, `nextConfig`, `name` to the rest of the system?**
  _76 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Landing e Conversão` be split into smaller, more focused modules?**
  _Cohesion score 0.12 - nodes in this community are weakly interconnected._
- **Should `Estratégia SEO Médica` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._
- **Should `Configuração TypeScript` be split into smaller, more focused modules?**
  _Cohesion score 0.09523809523809523 - nodes in this community are weakly interconnected._