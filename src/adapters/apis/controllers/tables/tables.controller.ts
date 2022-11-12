// import express from "express";
// import debug from "debug";
// import listTablesUseCase from "../../../../domain/usecases/tables/tables.list.usecase";
// import createTablesUsecase from "../../../../domain/usecases/tables/tables.create.usecase";
// import readTablesUsecase from "../../../../domain/usecases/tables/tables.read.usecase";
// import updateTablesUsecase from "../../../../domain/usecases/tables/tables.update.usecase"
// import deleteTablesUsecase from "../../../../domain/usecases/tables/tables.delete.usecase";
// import logger from "../../../../infrastructure/logs/winston.logs";

// const log: debug.IDebugger = debug('app:tables-controller');

// class TablesController {
//     async listTables(req: express.Request, res: express.Response) {
//         try {
//             const tables = await listTablesUseCase.execute();
//             res.status(200).send(tables);
//         } catch (err) {
//             logger.error('Error listTables in TablesController:', err);
//             res.status(404).send('constants!!!');
//         }
//     }

//     async getTablesById(req: express.Request, res: express.Response) {
//         try {
//             const tables = await readTablesUsecase.execute({
//                 IdTable: Number(req.params.idTable)
//             });
//             res.status(200).send(tables)
//         } catch (err) {
//             logger.error('Error getTablesById in TablesController:', err);
//             res.status(404).send('constants!!!');
//         }
//     }

//     async createTable(req: express.Request, res: express.Response) {
//         try {
//             const tables = await createTablesUsecase.execute(req.body);
//             log(tables);
//             res.status(201).send(tables);
//         } catch (err) {
//             logger.error('Error createtables in TablesController:', err);
//             res.status(500).send('constants!!!');
//         }
//     }

//     async updateTables(req: express.Request, res: express.Response){
//         try {
//             const tables = await updateTablesUsecase.execute(req.body);
//             res.status(200).send(tables);
//         } catch (err) {
//             logger.error('Error updateTables in TablesController:', err);
//             res.status(400).send('constants!!!');
//         }
//     }

//     async deleteTables(req: express.Request, res: express.Response) {
//         try {
//             const tables = await deleteTablesUsecase.execute({
//                 IdTable: Number(req.params.idTable)
//             });
//             res.status(204).send();       
//         } catch (err){
//             logger.error('Error deleteTables in TablesController:', err);
//             res.status(500).send('constants!!!');
//         }
//     }
// };

// export default new TablesController();