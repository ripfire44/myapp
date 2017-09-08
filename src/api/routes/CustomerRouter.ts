import * as express from 'express';
import { Customer } from '../model';

class CustomerRouter {
    public router: express.Router;
    constructor() {
        this.router = express.Router();
        this.router.get('/', (req, res) => {
            let c: Customer = {
                id: 1,
                name: 'First Customer',
            }
            res.json(c);
        });
        this.router.get('/new', (req, res) => {
            res.json(new Customer());
        });
    }
}

let customerRouter = new CustomerRouter().router;
export { customerRouter };