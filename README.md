# README Temporário

## Combinados até o momento:

- Padrão de branch: feature/nome-da-feature-em-ingles

- Padrão de commit: em inglês, primeira letra maiúscula, e verbo no gerúndio. Ex: 'Creating new feature'

- Estrutura de pastas já montada. Onde houver uma pasta chamada 'example' significa que deverá haver uma pasta correspondente a entidade que está sendo trabalhada com os seus respectivos arquivos. Ex: em domain/entities há uma pasta chamada 'example' e dentro da mesma um arquivo chamado 'example.entity.ts'. Se estou trabalhando com uma entidade chamada users (sempre no plural) deverei criar dentro de domain/entities uma pasta 'users' com um arquivo 'users.entity.ts'.

- Convide um colaborador para revisar seu pull request.

- JAMAIS DAR PUSH DIRETO NA MAIN

<br>

## Pacotes instalados até o momento:

```
npm i express debug winston express-winston cors

npm i -D @types/cors @types/express @types/debug source-map-support tslint typescript

npx tsc --init --rootDir src --outDir dist

npm install dotenv --save

npm i sequelize

npm install --save mysql2

npm i @types/sequelize

npm install -D sequelize-cli

npm i -D config

npm i --save-dev @types/config
```

<br>

## Scripts criados no package.json:
```
"start": "tsc && node --unhandled-rejections=strict -r dotenv/config ./dist/infrastructure/app/app.js"

"debug": "SET DEBUG=* && npm run start" (alterar para 'export DEBUG' caso ubuntu)
```

<br>

## Scripts para criar tabelas e seedar o banco de dados:
```
seeders: npx sequelize db:seed:all

migrations: npx sequelize db:migrate
```

<br>

## Lembretes:

- Renomear o arquivo `.env.example` para `.env` e preencher as variáveis de ambiente da sua máquina.

- JAMAIS DAR PUSH DIRETO NA MAIN (já disse isso?!)