import express from 'express';

export abstract class CommonRoutesConfig {
    constructor(public app: express.Application, public name: string) {
        this.configureRoutes();
    }

    getName() {
        return this.name;
    }

    abstract configureRoutes(): express.Application;
}