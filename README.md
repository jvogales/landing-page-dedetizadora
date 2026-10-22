# Dedetizadora Orlandini — Landing Page

Site institucional da **Dedetizadora Orlandini**, com apresentação dos serviços de controle de pragas, informações sobre a empresa e chamadas para atendimento pelo WhatsApp. O conteúdo atual apresenta atendimento em **Jacarezinho e região**.

> Protegendo o que mais importa.

## Tecnologias

- HTML5 para a estrutura da página.
- CSS3 para estilos, layout responsivo e animações.
- JavaScript puro para abas de serviços, perguntas frequentes e efeitos de rolagem.
- Google Fonts: **Inter** no corpo do texto e **Plus Jakarta Sans** nos títulos.

O projeto é estático: não utiliza framework, gerenciador de pacotes, backend ou etapa de build. O contato é feito por links para o WhatsApp; não há formulário de envio.

## Estrutura

```text
landing-page-dedetizadora/
├── assets/       # Imagens e materiais gráficos
├── index.html    # Conteúdo, seções e links de contato
├── blog.html     # Listagem dos artigos
├── blog-*.html   # Artigos completos
├── DESIGN.md     # Direção visual e comportamento editorial
├── style.css     # Identidade visual, responsividade e animações
├── script.js     # Interações da página
└── README.md
```

## Como executar

Para obter o projeto:

```bash
git clone https://github.com/jvogales/landing-page-dedetizadora.git
cd landing-page-dedetizadora
```

Se o repositório já estiver disponível no ambiente, entre na pasta existente. Não é necessário instalar dependências.

Com **Python 3** instalado, inicie um servidor estático na raiz do projeto:

```bash
python3 -m http.server 8000 --bind 0.0.0.0
```

Em uma máquina local, acesse a porta `8000` pelo navegador. Para encerrar o servidor, pressione `Ctrl+C` no terminal. Em ambientes na nuvem, a forma de acesso pelo navegador depende do encaminhamento de portas oferecido pela plataforma.

Também é possível abrir `index.html` diretamente, mas o servidor HTTP é recomendado para validar o site. As fontes do Google dependem de conexão com a internet; sem elas, o CSS utiliza fontes do sistema.

## Conteúdo e funcionalidades

- Apresentação da empresa e seus diferenciais.
- Painel com abas para desinsetização, descupinização, desratização, pragas urbanas e limpeza de caixa d'água.
- Mensagem do WhatsApp adaptada ao serviço selecionado.
- Seção sobre a empresa e perguntas frequentes em acordeão.
- Botões de contato e atalho flutuante para o WhatsApp.
- Efeitos de entrada, paralaxe e sombra no cabeçalho durante a rolagem.
- Tratamento da preferência por movimento reduzido nas animações controladas por JavaScript.

## Blog

Acesse o Blog pelo cabeçalho do site. A listagem em `blog.html` reúne três artigos iniciais sobre sinais de infestação, prevenção de baratas e identificação de cupins. Os artigos são páginas HTML estáticas e funcionam sem JavaScript. Para adicionar conteúdo, siga a estrutura de um arquivo `blog-*.html` e inclua seu cartão em `blog.html`, mantendo título, descrição e links coerentes.

## Personalização

| O que alterar | Onde |
| --- | --- |
| Textos, região atendida e links de contato | `index.html` |
| Imagens e banners | `assets/` e suas referências no HTML e no CSS |
| Cores, fontes e estilos | Variáveis em `:root` e demais regras de `style.css` |
| Mensagens dinâmicas do WhatsApp e interações | `script.js` |

A paleta atual utiliza azul-marinho (`#0b1d3a`), vermelho (`#b91c1c`), verde para os botões do WhatsApp (`#16a34a`) e fundo claro (`#f3f6fb`).

### Configurar o WhatsApp

Os links atuais usam o número provisório **`5500000000000`**. Antes de publicar:

1. Confirme o número oficial de atendimento.
2. Substitua o número em todos os links `https://wa.me/` de `index.html`.
3. Atualize também a constante `WA_BASE` em `script.js`, usada pelas abas de serviços.
4. Use o formato internacional: código do país, DDD e número, somente com dígitos.
5. Confira o destino e a mensagem dos botões, inclusive após trocar de serviço.

## Validação

Não há suíte de testes automatizados configurada. Para verificar a sintaxe do JavaScript, caso tenha **Node.js** disponível:

```bash
node --check script.js
```

Com o servidor em execução, confira no navegador:

- Carregamento das imagens, estilos e fontes.
- Layout em telas de celular e desktop.
- Troca das abas e atualização da mensagem de contato.
- Abertura e fechamento das perguntas frequentes.
- Navegação por teclado e funcionamento dos links de contato.

A verificação de sintaxe não substitui os testes de interação no navegador.

## Publicação

O site pode ser servido por hospedagens estáticas, como GitHub Pages, Netlify ou Vercel. A plataforma e o domínio de produção não estão definidos neste repositório.

Ao configurar a hospedagem:

- Use a raiz do repositório como diretório de publicação, contendo `index.html`, `style.css`, `script.js` e `assets/`.
- Não configure comando de build: os arquivos já estão prontos para servir.
- Preserve os caminhos relativos e confirme o carregamento dos recursos após publicar.
- Revise o número do WhatsApp, os textos e a região de atendimento antes de disponibilizar o site.

## Direitos de uso

Projeto de uso interno/comercial da Dedetizadora Orlandini. Todos os direitos reservados.
