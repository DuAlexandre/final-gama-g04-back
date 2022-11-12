import * as Sequelize from "sequelize";

export default {
    up:(QueryInterface: Sequelize.QueryInterface) => {
        return QueryInterface.createTable('categories', {
            idCategory:{
                type: Sequelize.DataTypes.INTEGER,
                primaryKey:true,
                autoIncrement:true,
            },
            name: Sequelize.DataTypes.STRING(220),
        });
    },
    down: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.dropTable('categories')
    }
}