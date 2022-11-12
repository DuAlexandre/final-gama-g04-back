// import { CommonRoutesConfig } from "../common/common.routes.config";
// import express from "express";
// import tablesController from "../../controllers/tables/tables.controller";

// export class TablesRoutes extends CommonRoutesConfig {

//     constructor(app: express.Application) {
//         super(app, 'TablesRoutes');
//     }

//     configureRoutes(): express.Application {
        
//         this.app.route("/tables")
//             .get(tablesController.listTables)
//             .post(tablesController.createTable);

//         this.app.route("/tables/:idTable")
//             .get(tablesController.getTablesById)
//             .put(tablesController.updateTables)
//             .delete(tablesController.deleteTables);

//         return this.app;
//     }
// }