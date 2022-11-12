import { MysqlDatabase } from "../../mysql.database";
import * as Sequelize from "sequelize";

export default MysqlDatabase.getInstance().createModel('tables', {
    idTable: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    order: {
    type: Sequelize.DataTypes.JSON ,
    allowNull: false 
},
    command: Sequelize.DataTypes.DOUBLE,
    createAt: Sequelize.DataTypes.DATE
});