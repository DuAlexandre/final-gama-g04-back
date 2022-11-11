//Estrutura -> models -> pasta da entidade -> nome deste arquivo substituindo "example"
// Criar modelagem da tabela do banco

import { MysqlDatabase } from "../../mysql.database";
import * as Sequelize from "sequelize";


export default MysqlDatabase.getInstance().createModel('products', {
    idProduct: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: Sequelize.DataTypes.STRING(220),
    description: Sequelize.DataTypes.STRING,
    image: Sequelize.DataTypes.STRING,
    price: Sequelize.DataTypes.DOUBLE,
    isVegan: Sequelize.DataTypes.BOOLEAN,
    isGlutenFree:Sequelize.DataTypes.BOOLEAN,
    isEnough: Sequelize.DataTypes.STRING,
    category: Sequelize.DataTypes.INTEGER,
});