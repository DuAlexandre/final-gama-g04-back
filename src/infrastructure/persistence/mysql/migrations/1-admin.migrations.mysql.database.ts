import * as Sequelize from "sequelize";

export default {
    up:(QueryInterface: Sequelize.QueryInterface) => {
        return QueryInterface.createTable('admin', {
            idAdmin:{
                type: Sequelize.DataTypes.INTEGER,
                primaryKey:true,
                autoIncrement:true
            },
            name: Sequelize.DataTypes.STRING(220),
            email: Sequelize.DataTypes.STRING(220),
            password:Sequelize.DataTypes.STRING(255),
        });
    },
    down: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.dropTable('admin')
    }
}