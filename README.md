![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white) ![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white) ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white) ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white) ![Swagger](https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white) ![Nginx](https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white) ![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)


# Sistema de aluguel de carros

Este projeto é apresentado no curso de NodeJS da RocketSeat. Decidi fazer este projeto para estudar a construção de todo um sistema backend em ExpressJS. Esse projeto me ensinou bastante sobre conceitos de SOLID e clean code, implementação de teste unitários e de integração, utilização de docker para conteinerizar o banco de dados e aplicação, autenticação de usuário através do JWT, swagger para documentação da API e comunicação com banco de dados através do TypeORM. Esse projeto me ensinou o quanto uma aplicação real precisa de diversos fatores para ser performática, ser de fácil manutenção e escalável.

# Conteúdos

- [Arquitetura](#arquitetura) 
- [Instruções de execução](#instruções-de-execução)
- [Funcionalidades](#funcionalidades)

# Arquitetura 

**SOLID**

*Utilizei essa arquitetura, porque ela é muito fácil de dar manutenção no código por separar sempre as responsabilidades de cada pasta e arquivo no projeto. Dessa forma, por exemplo, se eu quiser mudar do TypeORM para um Prisma, faço isso sem afetar meu Services e Controllers, porque é tudo independente.*

**Express**

*É o backend principal da minha aplicação feita em TypeScript, e foi escolhido porque tenho mais afinidade com JavaScript e queria aprender a construir utilizando TypeScript, para me dar mais confiança na hora de enviar os dados dos endpoints da API.*

**PostgreSQL**

*Esse banco de dados relacional é um dos mais conhecidos, por isso foi utilizado no projeto. Além disso, como o próprio nome diz, foi excelente aprender sobre tipos de relações entre os dados das tabelas do BD.*

**Docker**

*O docker foi utilizado para conteinerizar a minha aplicação e o banco de dados PostgreSQL. Dessa forma, eu consigo subir e descer o banco e a aplicação apenas utilizando os comandos no docker, além dele universalizar as versões, o que torna mais fácil alguém contribuir com o meu projeto, posteriormente.*

**TypeORM**

*Um dos ORMs mais conhecidos e versáteis. Utilizei ele pela ferramenta ter facilidade em utilizar a maioria dos bancos relacionais e suporte básico ao MongoDB também.*

**Eslint**

*É muito bom para dar produtividade na construção dos códigos, pois essa ferramenta pode padronizar todos os arquivos do meu projeto.*

**Jest**

*Este framework me possibilita construir testes unitários e de integração, aumentando assim a confiabilidade e redução de erros e bugs no projeto.*

**JWT**

*Esse é um dos tokens mais utilizados para autenticação de rotas. Neste projeto, utilizei para autenticar as rotas de criação, edição, listagem e deleção de clientes, ou seja, as rotas só funcionariam com o usuário autenticado.*

**AWS**

*Ter um servidor com infraestrutura sensacional para fazer deploy da minha aplicação com segurança e alta margem de escalabilidade é imprescindível e a AWS me ajuda nisso.*

**NGINX**

*Esse é um dos melhores softwares de proxy reverso, por ter uma arquitetura assíncrona e orientada a eventos, ele nos dá capacidade de receber muitas requisições ao mesmo tempo, o que nos dá uma base sólida, caso o projeto escale.*

**PM2**

*Esse é um gerenciador de processos, estou utilizando ele para rodar a aplicação em background, assim posso monitorar se o processo está onlie, parado ou teve algum erro.*


# Funcionalidades

1. Rotas User:
    - Cria um usuário pelo body, na rota /users.
    - Faz upload de uma avatar para o usuário, na rota users/avatar.
    - Lista um usuário, na rota /users/profile.

2. Rotas Cars:
    - Cria um carro pelo body, na rota /cars.
    - Lista todos os carros que estejam disponíveis para aluguel, na rota /cars/available.
    - Atribui especificações a um carro, na rota /cars/specifications/id.
    - Faz o upload da imagem de um carro referente ao id passado na rota, no endpoint /cars/images/id.

3. Rotas Specifications:
    - Cria uma especificação que fica disponível para qualquer carro, pois uma especificação pode ser atribuída a muitos carros. Tudo isso no endpoint /specifications.

4. Rotas Categories:
    - Cria uma categoria que fica disponível para qualquer carro, pois uma categoria pode ser atribuída a muitos carros. Fica no endpoint /categories
    - Lista todas as categorias criadas, na rota /categories.
    - Também dá pra importar categorias de um arquivo .csv, na rota /categories/import.

5. Rotas Rentals:
    - Cria um aluguel que tem um dia certo para acabar, se não gera multa para a usuário que o fez, na rota /rentals.
    - Rota de devolução do carro calcula se teve atraso na entrega e gera multa, caso ultrapasse a data experada. Além disso, o aluguel tem duração mínima de 24 horas, então se o usuário devolver antes, ele vai ter que pagar o aluguel pelas 24 horas mesmo assim. Está na rota /rentals/devolution/id.
    - Lista todos os alguéis, na rota /rentals/user.

6. Rotas Authenticate:
    - Inicia uma sessão para o usuário e gera um token para ele que expira em certo tempo, na rota /sessions.
    - A rota /refresh-token serve para quando o token expirar. Dessa forma, ele pega o token antigo e substitui por um novo com um novo tempo para expirar. Assim, a experiência do usuário será mais proveitosa.

7. Rotas Password:
    - Quando o usuário esquece a senha, ele coloca o email do usuário que está tentando logar, depois é enviado um email, na rota /password/forgot.
    - Na rota /password/reset?token, é feita a mudança da senha do usuário para uma nova.
    

# Instruções de execução

**Rode o comando para instalar as dependências**

```bash
    yarn 
```

**A aplicação está no docker, então basta subir ou derrubar os containeres usando:**

```bash
    docker-compose up -d
```

```bash
    docker-compose down
```

**Caso queira parar e iniciar novamente os containeres use:**

```bash
    docker stop rentx
```

```bash
    docker stop database_ignite
```

```bash
    docker start rentx
```

```bash
    docker start database_ignite
```
