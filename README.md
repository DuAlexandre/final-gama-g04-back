<img src="courier.svg" height="250">


# Projeto Final - Gama Academy - Grupo 04

Projeto Final solicitado pela Gama Academy como trabalho de conclusão de curso do Bootcamp Nanodegree de Desenvolvimento Web FullStack, nesta, com especialização em BackEnd.


## Apêndice

Neste trabalho, escolhemos fazer um cardápio virtual em um projeto White Label (ou seja, um sistema modelo criado por uma empresa que pode ser reutilizado por outras, apenas modificando informações como logo e marca), no qual o cliente iria realizar um pedido em sua mesa, escolhendo os itens do cardápio, vendo as informações de acordo com o modelo na documentação da API, além disso, o cliente iria acompanhar os valores de sua comanda, passando para a cozinha o seu pedido. 
A estrutura de dados da aplicação está pronta para o CRUD completo dos pedidos e da cozinha e pronta para receber um possível módulo de administrador.



[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)


## Documentação da API

Por ser extensa, optamos por disponibilizar a documentação da API via link:


- [Link da Documentação](https://dualexandre.github.io/documentation-04/)
## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/DuAlexandre/final-gama-g04-back.git
```

Entre no diretório do projeto

```bash
  cd final-gama-g04-back
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor - Para usuários Windows

```bash
  npm run wdebug
```
Inicie o servidor - Para usuários linux

```bash
  npm run udebug
```

Para transpilar o projeto:

```bash
  tsc
```
Renomear o arquivo .env.example para .env para conectar com a nossa aplicação na nuvem.
Alterar os dados para:
DB_HOST=containers-us-west-25.railway.app
DB_USER=root
DB_PASS=pWFh11MfOW7ABuBk0jwi
DB_PORT=6319
DB_NAME=railway


## Funcionalidades

Neste código Back-End, pode ser utilizado diversas funcionalidades, tais como:

```bash
npm run udebug ou wdegub -  Para iniciar a aplicação.
```


### Testes

```bash
npm run test -  Para iniciar a execução de testes por jest e Supertest.
```
```bash
npm run test:watch -  Para iniciar a execução de testes por jest e Supertest com visualização em tempo real e com --userOpenHandles.
```
```bash
npm run test:coverage -  Para iniciar a execução de testes via colunas no estilo coverage com visualização detalhada.
```
```bash
npm run udebug ou wdegub -  Para iniciar a aplicação.
```

Os testes foram efetuados na totalidade dos usecases e nas rotas utilizadas pelo FRONT.

### CRUD

Feito em sua totalidade GET, GET BY ID, DELETE, PUT, POST para as entidades TABLES e PRODUCTS mesmo sem uso para o FRONT para aplicação futura em novas versões.



## Referência

 - [Jest Documentation](https://jestjs.io/docs/getting-started)
 - [TypeScript Documentation](https://www.typescriptlang.org/docs/)



## Autores

- <img src="https://avatars.githubusercontent.com/u/95940707?s=60&v=4"> [@DuAlexandre](https://github.com/DuAlexandre)
- <img src="https://avatars.githubusercontent.com/u/109252921?s=60&v=4"> [@DylCaprio](https://github.com/DylCaprio)
- <img src="https://avatars.githubusercontent.com/u/109240608?s=60&v=4"> [@jonveigel](https://github.com/jonveigel)
- <img src="https://avatars.githubusercontent.com/u/105946388?s=60&v=4"> [@marcos=px](https://github.com/marcos-px)


