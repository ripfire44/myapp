import * as express from 'express';
import { customerRouter } from './CustomerRouter';


class Routes {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.app.use('/customer', customerRouter);
    }
}
const routes = new Routes().app;

export { customerRouter, routes };