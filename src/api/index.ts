import * as express from 'express';

import { routes } from './routes';

export class Api {
    public app: express.Application;
    constructor() {
        this.app = express();
        this.app.use('/', routes);
    }
}
