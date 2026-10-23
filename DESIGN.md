# Direção visual

Site institucional e blog em português brasileiro para pessoas de Jacarezinho e região que procuram prevenção e controle de pragas. A página inicial apresenta serviços; o blog oferece leitura educativa e navegação para artigos completos.

## Identidade e fonte dos tokens

As variáveis de `style.css :root` são a fonte canônica: azul-marinho para títulos, vermelho para destaque editorial, verde para contato via WhatsApp, superfície branca e fundo claro. Inter no texto e Plus Jakarta Sans nos títulos, com fallback para fontes do sistema. Preservar a identidade existente.

## Conteúdo editorial

O blog usa abertura tipográfica com “Informação também é proteção”, imagens dos serviços existentes e cartões com categoria, título, resumo e acesso ao artigo. Artigos têm largura de leitura de até 68 caracteres, títulos hierárquicos e retorno explícito à listagem. Não apresentar datas, autoria técnica ou certificações sem confirmação. Não oferecer receitas químicas ou promessas de eliminação.

## Comportamento

Páginas HTML estáticas e links nativos, disponíveis sem JavaScript. Navegação Início/Blog no cabeçalho, indicação da seção ativa, foco visível e link para pular o cabeçalho nas páginas editoriais. Cartões em colunas no desktop e empilhados no celular. Imagens reservam espaço; movimento reduzido é respeitado. Não adicionar dependências ou CMS sem necessidade demonstrada.

## Rodapé compartilhado

Todas as páginas usam rodapé azul-marinho com assinatura tipográfica Orlandini, navegação para serviços e blog, região atendida e contato. A faixa inferior separa direitos de uso e retorno ao topo. Reutilizar os mesmos tokens e marcação em todas as páginas estáticas. Não inventar endereço, horário, redes sociais ou registro profissional. Layout em três colunas no desktop; no celular, identidade em uma linha própria e navegação/contato lado a lado; foco claro sobre o fundo escuro.

## Marcas de clientes

Faixa branca compacta entre o painel de serviços e a seção sobre a empresa, com marcas em espaços iguais, proporções preservadas e movimento contínuo discreto. Sem título visível; título acessível e controle compacto de pausa. Não aplicar filtro de cinza. Altura aproximada de 90 px no desktop e 74 px no celular; com movimento reduzido, pode crescer para acomodar todas as marcas. Ordem: Grupo EPR, CAT Jacarezinho, UENP, Magnus e Ajadavi. Sem descrição de cases. Pausa por hover somente com mouse e por botão persistente em qualquer dispositivo. Movimento reduzido inicia estático, com controle para iniciar a animação explicitamente. Cópias visuais ficam ocultas de tecnologias assistivas.

Arquivos de marca: Grupo EPR, CAT Jacarezinho, UENP e Ajadavi em PNG colorido, a partir dos originais enviados; Magnus permanece em SVG por preferência do usuário. Usar `object-fit: contain` para acomodar diferentes proporções sem recorte ou distorção.

## Logo do cabeçalho

Usar a imagem oficial `assets/logo-orlandini.png` no link de marca do cabeçalho em todas as páginas, com proporção quadrada preservada, 46 × 46 px em todas as telas, ao lado do nome e slogan originais, mantendo o tamanho anterior do cabeçalho. O rodapé mantém a assinatura tipográfica anterior.

## Navegação mobile

Até 600 px: faixa de região oculta, cabeçalho de 68 px com marca, WhatsApp e botão de menu. Links são um disclosure não modal, com aria-expanded, Escape, fechamento ao navegar, clicar fora ou sair com teclado. Sem JavaScript, os links permanecem visíveis. Script compartilhado em `navigation.js` para início, blog e artigos. Rodapé com navegação/contato em duas colunas e textos menores, mantendo alvos de toque. Blog mobile segue as referências de listas editoriais fornecidas: miniatura à esquerda, categoria/título/link à direita, divisórias finas e sem cartões altos ou resumo na listagem. Títulos completos, sem truncamento; sem datas inventadas. Abertura reduzida e artigos com hierarquia mais compacta, preservando texto de leitura em 16 px. Desktop preserva cartões com resumo.
