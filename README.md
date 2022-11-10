
<img align="right" width="60px" src="https://i.ibb.co/yhg8Qp4/avatar.png"/>
<img align="left" width="60px" src="https://i.ibb.co/yhg8Qp4/avatar.png" />

<div align="center">
<p>🚀 <b> Aplicação web no estilo blog </b>🚀 <br> 
<i font-size: 2px> desenvolvido durante meus estudos em React </i>
</div>

<br><br>

## Sobre
<p align="center"><b>É um blog que somente os usuários que se inscrevem tem acesso ao conteúdo inteiro das postagens.</b></p>

A página inicial é renderizada de forma SSG (Static Site Generation) devido a página não ter muitos dados que precisam ser atualizados a cada reload. 
(implementado um revalidate a cada 24 horas)<br>

A autenticação de login foi realizada com o Next Auth para GitHub. (utiliza algoritmo de encriptação HS 512)<br>

O produto foi criado no STRIPE que também é responsável pelos pagamentos online da app. (cartão 4242 4242 4242 4242 para testes)<br>

A aplicação é frontend seguindo o padrão JAMStack e para não depender totalmente de backend para avaliar o funcionamento, foi criado um banco de dados utilizando o FaunaDB 
que é utilizado em aplicações serveless. (a conexão é feita por http e por isso não é necessária uma conexão ativa o tempo todo) <br>

Foi utilizado o Prismic CMS (caracterizado por ser um Headless CMS que contém a parte visual apenas do painel de administração e todos os dados são servidos por uma API, seja ela HTTP, GraphQL ou SDK)
como interface para criação de posts.<br>





## Tecnologias

As seguintes tecnologias foram utilizadas no projeto:

- [Next.js](https://nextjs.org/)
- [Prismic CMS](https://prismic.io/)
- [Stripe](https://stripe.com/)
- [FaunaDB](https://fauna.com/)


## Inicializando ##

```bash
# Clonar
$ git clone https://github.com/juliasc12/igNews

# Instalar dependencias
$ yarn install

# Executar
$ yarn dev

```

## Stripe-CLI
Para acompanhar as respostas de requisição na compra da inscrição no blog.

```bash
# Instalar
$ https://github.com/stripe/stripe-cli/releases/tag/v1.12.4

# Executar
$ stripe listen --forward-to localhost:3000/api/webhooks

```

## 

<div align="center">
<h3> Página Inicial </h3>
<img width="700px" src="https://i.ibb.co/TvbmNkQ/index.png">

<h3> Posts </h3>
<img width="600px" src="https://i.ibb.co/6X3303P/posts.png">

<h3> Visão de usuário sem assinatura </h3>
<img width="600px" src="https://i.ibb.co/BN7mGsG/canceled.png">
</div>




