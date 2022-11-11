import * as Sequelize from "sequelize";

export default {
    up:(QueryInterface: Sequelize.QueryInterface) => {
        return QueryInterface.createTable('products', {
            idProduct:{
                type: Sequelize.DataTypes.INTEGER,
                primaryKey:true,
                autoIncrement:true
            },
            name: Sequelize.DataTypes.STRING(220),
            description: Sequelize.DataTypes.STRING,
            image: Sequelize.DataTypes.STRING,
            price: Sequelize.DataTypes.DOUBLE,
            isVegan: Sequelize.DataTypes.BOOLEAN,
            isGlutenFree:Sequelize.DataTypes.BOOLEAN,
            isEnough: Sequelize.DataTypes.STRING,
            category: Sequelize.DataTypes.INTEGER,
            createdAt: Sequelize.DataTypes.DATE,
            updatedAt: Sequelize.DataTypes.DATE,
        });
    },
    down: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.dropTable('products')
    }
}