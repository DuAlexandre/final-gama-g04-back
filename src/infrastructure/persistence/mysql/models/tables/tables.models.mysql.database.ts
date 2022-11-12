import { MysqlDatabase } from "../../mysql.database";
import * as Sequelize from "sequelize";

export default MysqlDatabase.getInstance().createModel('tables', {
    id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idTable: Sequelize.DataTypes.INTEGER,
    order: Sequelize.DataTypes.STRING, ////sequelize!
    createdAt: Sequelize.DataTypes.DATE
});