# Protótipo — Dr. Leandro Batisti

Landing page conceitual criada a partir do conteúdo público do site atual do médico.

## Visualização local

Na pasta do projeto, execute:

```powershell
python -m http.server 4173
```

Depois acesse `http://127.0.0.1:4173/`.

## Arquivos

- `index.html`: estrutura e conteúdo da landing page.
- `styles.css`: direção visual, responsividade e animações.
- `script.js`: menu mobile, progresso de leitura, FAQ e sistema de animações vinculado ao scroll.

## Sistema de movimento

- Hero com parallax sutil.
- Colagem editorial `sticky` com imagens flutuantes e três palavras sincronizadas ao scroll.
- Faixa tipográfica cinética em loop.
- Sequência narrativa com quatro cenas e navegação por etapas no desktop.
- Versão mobile simplificada, com as cenas empilhadas para preservar legibilidade e desempenho.
- Cursor personalizado apenas em dispositivos com ponteiro preciso.
- Fallback completo para `prefers-reduced-motion`.

As animações usam apenas CSS transforms, `requestAnimationFrame` e `IntersectionObserver`, sem bibliotecas externas de motion.

## Observações do protótipo

- As imagens são carregadas do site público atual e deverão ser substituídas pelos arquivos originais antes da publicação.
- Números, áreas de atendimento, textos, CRM, RQE, endereços e depoimentos devem ser validados pelo médico.
- O protótipo inclui `noindex, nofollow` e não deve ser publicado como versão definitiva sem a revisão de conteúdo, privacidade e publicidade médica.
