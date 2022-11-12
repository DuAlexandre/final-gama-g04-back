//Estrutura -> models -> pasta da entidade -> nome deste arquivo substituindo "example"
// Criar modelagem da tabela do banco

import { MysqlDatabase } from "../../mysql.database";
import * as Sequelize from "sequelize";


export default MysqlDatabase.getInstance().createModel('products', {
    idCategory: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: Sequelize.DataTypes.STRING(220),
});