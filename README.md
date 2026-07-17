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
- Sequência narrativa com quatro cenas e navegação por etapas no desktop e no mobile.
- Composição mobile própria para telas altas e compactas, com amplitudes, enquadramentos e áreas seguras adaptadas.
- Cursor personalizado apenas em dispositivos com ponteiro preciso.
- Fallback completo para `prefers-reduced-motion`.

As animações usam apenas CSS transforms, `requestAnimationFrame` e `IntersectionObserver`, sem bibliotecas externas de motion.

## Otimizações aplicadas

- Geometria das sequências calculada fora do loop de scroll e recalculada somente quando o layout muda.
- Um único `requestAnimationFrame` coordena progresso, cenas e parallax.
- Seções fora da área próxima à tela deixam de receber atualizações visuais.
- `will-change` é ativado apenas enquanto cada sequência está próxima da viewport.
- Imagens abaixo da dobra usam carregamento lazy e decodificação assíncrona.
- Barra de progresso usa `transform`, evitando recálculo de layout por alteração de largura.
- Parallax e cursor pesado são desativados em dispositivos touch.

## Decisões de UX e conversão

- Informações essenciais — CRM, RQE, formação, segunda opinião e unidades — aparecem antes da primeira animação.
- O mobile apresenta retrato, nome e especialidade do médico acima da dobra.
- O CTA fixo mobile só aparece depois que o bloco inicial de decisão foi ultrapassado e é ocultado durante o menu.
- O menu mobile funciona como drawer com fundo de proteção, CTA próprio, fechamento por `Esc` e controle de foco.
- A seção de atuação explica para quem a avaliação pode ser útil e oferece um CTA contextual.
- Depoimentos no mobile possuem instrução, contador e controles anterior/próximo.
- As sequências sticky foram encurtadas para reduzir o tempo até o conteúdo prático.

## Observações do protótipo

- As imagens são carregadas do site público atual e deverão ser substituídas pelos arquivos originais antes da publicação.
- Números, áreas de atendimento, textos, CRM, RQE, endereços e depoimentos devem ser validados pelo médico.
- O protótipo inclui `noindex, nofollow` e não deve ser publicado como versão definitiva sem a revisão de conteúdo, privacidade e publicidade médica.
