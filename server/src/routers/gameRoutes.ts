import { Router } from 'express';
import { gamesController } from '../controllers/gamesController';

export class GameRoutes {

    public router: Router = Router();

    constructor() {
        this.config()
    }

    config(): void {
        this.router.get('/', gamesController.index);
    }
}

const gameRoutes = new GameRoutes();
export default gameRoutes.router;