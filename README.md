# Projeto individual desenvolvido dentro do módulo de Back-end do curso de Desenvolvimento Web FullStack na Trybe para fins avaliativos.

---

# Habilidades

Esse projeto foi desenvolvido visando os seguintes pontos de aprendizado:

- Entender o que há por dentro de um token de autenticação;

- Gerar tokens a partir de informações como login e senha;

- Autenticar rotas do Express, usando o token JWT;

- Fazer upload de arquivos em APIs REST;

- Salvar arquivos no servidor através de uma API REST;

- Consultar arquivos do servidor através de uma api REST.

- Realizar testes de integração

---

## O que foi desenvolvido

O objetivo foi desenvolver uma aplicação utilizando a arquitetura MSC onde deverá ser possível fazer o cadastro e login de pessoas usuárias, onde apenas essas pessoas poderão acessar, modificar e deletar as receitas que cadastrou.

---

# Instruções para entregar seu projeto

1. Clone o repositório

- `git clone https://github.com/breenolf/sd-09-breenolf-cook-master-project.git`.
- Entre na pasta do repositório que você acabou de clonar:
  - `cd sd-09-cookmaster`

2. Instale as dependências e inicialize o projeto

 - Instale as dependências:
    - `npm install`
 - Inicialize o projeto:
    - `npm start`
 - Rode os testes:
    - `npm test`

---

## Conexão com o Banco

A conexão do banco local deverá conter os seguintes parâmetros:

```javascript
const MONGO_DB_URL = 'mongodb://localhost:27017/Cookmaster';
const DB_NAME = 'Cookmaster';
```

Para o avaliador funcionar altere a conexão do banco para:

```javascript
const MONGO_DB_URL = 'mongodb://mongodb:27017/Cookmaster';
const DB_NAME = 'Cookmaster';
```
---

## Linter

Para garantir a qualidade do código de forma a tê-lo mais legível, de mais fácil manutenção e seguindo as boas práticas de desenvolvimento foi utilizado neste projeto o linter ESLint. Para rodar o linter localmente, execute o comando abaixo:

  - `npm run lint`
