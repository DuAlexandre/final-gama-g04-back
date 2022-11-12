//Estrutura -> seeders -> nome deste arquivo substituindo "example"
//Lembrar de seguir sequência númerica para população lógica do banco de dados
//Não adicionar pastas a esta
import * as Sequelize from "sequelize";

export default {
    up: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.bulkInsert('categories', [
            {
                "idCategory": 1,
                "name": "Bebidas",
            },
            {
                "idCategory": 2,
                "name": "Entradas",
            },
            {
                "idCategory": 3,
                "name": "Saladas",
            },
            {
                "idCategory": 4,
                "name": "Pratos Principais",
            },
            {
                "idCategory": 5,
                "name": "Sobremesa",
            },
        ])
    },

    down: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.bulkDelete('categories', {});
    }
}