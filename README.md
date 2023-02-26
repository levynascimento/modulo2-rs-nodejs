![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white) ![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white) ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white) ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white) ![Swagger](https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white)


# Sistema de aluguel de carros

Este projeto é apresentado no curso de NodeJS da RocketSeat. Decidi fazer este projeto para estudar a construção de todo um sistema backend em ExpressJS. Esse projeto me ensinou bastante sobre conceitos de SOLID e clean code, implementação de teste unitários e de integração, utilização de docker para conteinerizar o banco de dados e aplicação, swagger para documentação da API e comunicação com banco de dados através do TypeORM. Esse projeto me ensinou o quanto uma aplicação real precisa de diversos fatores para ser performática, ser de fácil manutenção e escalável.

# Conteúdos

- [Arquitetura](#arquitetura) 
- [Instruções de execução](#instruções-de-execução)

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
