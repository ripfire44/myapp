import * as express from 'express';

import Routes from './routes/Routes';

class Api {
    public app: express.Application;
    constructor() {
        this.app = express();
        this.setupRoutes();
    }
    private setupRoutes(): void {
        Routes.register(this.app);
    }
}

export = new Api().app;
