import { ValidationError } from "express-validation";
import express from "express";

class HandleError {

    async hasError(error: any, req: express.Request, res: express.Response, next: express.NextFunction) {
        if (error instanceof ValidationError) {
            return res.status(error.statusCode).json(error)
        }
    
        return res.status(500).json(error);
    
    }
}
export default new HandleError();