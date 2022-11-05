# final-gama-g04-back

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
```

## Scripts gerados no package.json
```
"start": "tsc && node --unhandled-rejections=strict -r dotenv/config ./dist/infrastructure/app/app.js"
"debug": "SET DEBUG=* && npm run start"
```