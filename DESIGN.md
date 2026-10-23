# Direção visual

Site institucional e blog em português brasileiro para pessoas de Jacarezinho e região que procuram prevenção e controle de pragas. A página inicial apresenta serviços; o blog oferece leitura educativa e navegação para artigos completos.

## Identidade e fonte dos tokens

As variáveis de `style.css :root` são a fonte canônica: azul-marinho para títulos, vermelho para destaque editorial, verde para contato via WhatsApp, superfície branca e fundo claro. Inter no texto e Plus Jakarta Sans nos títulos, com fallback para fontes do sistema. Preservar a identidade existente.

## Conteúdo editorial

O blog usa abertura tipográfica com “Informação também é proteção”, imagens dos serviços existentes e cartões com categoria, título, resumo e acesso ao artigo. Artigos têm largura de leitura de até 68 caracteres, títulos hierárquicos e retorno explícito à listagem. Não apresentar datas, autoria técnica ou certificações sem confirmação. Não oferecer receitas químicas ou promessas de eliminação.

## Comportamento

Páginas HTML estáticas e links nativos, disponíveis sem JavaScript. Navegação Início/Blog no cabeçalho, indicação da seção ativa, foco visível e link para pular o cabeçalho nas páginas editoriais. Cartões em colunas no desktop e empilhados no celular. Imagens reservam espaço; movimento reduzido é respeitado. Não adicionar dependências ou CMS sem necessidade demonstrada.

## Rodapé compartilhado

Todas as páginas usam rodapé azul-marinho com logo oficial fornecida pelo usuário (`assets/logo-orlandini.png`), preservada integralmente em bloco de 200 px, navegação para serviços e blog, região atendida e contato. A faixa inferior separa direitos de uso e retorno ao topo. Reutilizar os mesmos tokens e marcação em todas as páginas estáticas. Não inventar endereço, horário, redes sociais ou registro profissional. Layout em três colunas no desktop, duas no tablet e uma no celular; foco claro sobre o fundo escuro.

## Marcas de clientes

Faixa branca compacta entre o painel de serviços e a seção sobre a empresa, com marcas em espaços iguais, proporções preservadas e movimento contínuo discreto. Sem título visível; título acessível e controle compacto de pausa. Não aplicar filtro de cinza. Altura aproximada de 90 px no desktop e 74 px no celular; com movimento reduzido, pode crescer para acomodar todas as marcas. Ordem: Grupo EPR, CAT Jacarezinho, UENP, Magnus e Ajadavi. Sem descrição de cases. Pausa no hover, foco e botão de pausa persistente; movimento reduzido mostra todas as marcas sem animação. Cópias visuais ficam ocultas de tecnologias assistivas.

Arquivos de marca: Grupo EPR, CAT Jacarezinho, UENP e Ajadavi em PNG colorido, a partir dos originais enviados; Magnus permanece em SVG por preferência do usuário. Usar `object-fit: contain` para acomodar diferentes proporções sem recorte ou distorção.
