import { CommonRoutesConfig } from "../common/common.routes.config";
import express from "express";
import tablesController from "../../controllers/tables/tables.controller";
import tablesMiddleware from "../../middlewares/tables/tables.middleware";

export class TablesRoutes extends CommonRoutesConfig {

    constructor(app: express.Application) {
        super(app, 'TablesRoutes');
    }

    configureRoutes(): express.Application {
        
        this.app.route("/tables")
            .get(tablesController.listTables)
            .post(tablesMiddleware.createValidator, tablesController.createTable);

        this.app.route("/tables/:idTable")
            .get(tablesMiddleware.idValidator, tablesController.getTablesById)
            .put(tablesMiddleware.idValidator, tablesMiddleware.updateValidator, tablesController.updateTables)
            .delete(tablesMiddleware.idValidator, tablesController.deleteTables);

        return this.app;
    }
}