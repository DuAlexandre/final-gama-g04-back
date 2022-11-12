import * as Sequelize from "sequelize";

export default {
    up: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.bulkInsert('tables', [
            {
                "id": 1,
                "idTable": 1,
                "order": ["x-tudo, x-salada"],
                "createdAt": "2022-11-12 14:25:23"
            },
            {
                "id": 2,
                "idTable": 2,
                "order": ["x-tudo, x-salada"],
                "createdAt": "2022-11-12 14:25:23"
            },
            {
                "id": 3,
                "idTable": 3,
                "order": ["x-tudo, x-salada"],
                "createdAt": "2022-11-12 14:25:23"
            },
            {
                "id": 4,
                "idTable": 4,
                "order": ["x-tudo, x-salada"],
                "createdAt": "2022-11-12 14:25:23"
            },
            {
                "id": 5,
                "idTable": 5,
                "order": ["x-tudo, x-salada"],
                "createdAt": "2022-11-12 14:25:23"
            },
        ])
    },

    down: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.bulkDelete('tables', {});
    }
}