import * as express from 'express';
import customerRouter from './CustomerRouter';


class Routes {
    private baseUrl: string;

    constructor() {
    }
    static register(app: express.Application): void {
        app.use('/customer', customerRouter);
    }

}

export default Routes;