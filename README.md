# Gerenciador de Blog

## Introdução
API para gerenciamento de posts e usuários de um blog utilizando arquitetura MSC, ORM, sequelize, biblioteca JWT para gerenciamento de tokens

---

## Funcionalidades:
- Cadastrar usuários;
- Criação, edição e exclusão de posts;
- Validação de requisição e tokens;

---

## Tecnológias

![Node Badge](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express Badge](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white
)
![Docker Badge](https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white)
![MySQL Badge](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)
![Sequelize Badge](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)

---

## Instalação do projeto localmente

1. No terminal, em um diretório de sua escolha, clonar o repositório:

```
git@github.com:melgacoc/22-projeto-blog-API.git
```

2. No repositório do projeto, instalar as dependências:

```
npm install
```

3. Após isso, subir os containers, se desejar:

```
docker-compose up -d --build
```

4. Se quiser rodar os testes, rodar o comando:

```
npm test
```

---

## Testes
Os testes foram desenvolvidos utilizando a biblioteca React Testing Library
1. No terminal execute:

```
npm run test-coverage
```

---

Developed by [Cláudio Melgaço](https://github.com/melgacoc) 2023
