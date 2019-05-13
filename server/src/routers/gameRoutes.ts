import { Router } from 'express';

export class GameRoutes {

    public router: Router = Router();

    constructor() {
        this.config()
    }

    config(): void {
        this.router.get('/', (req, res) => res.send('Juegos'));
    }
}

const gameRoutes = new GameRoutes();
export default gameRoutes.router;