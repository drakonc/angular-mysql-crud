import { Router } from 'express';
import { gamesController } from '../controllers/gamesController';

export class GameRoutes {

    public router: Router = Router();

    constructor() {
        this.config()
    }

    config(): void {
        this.router.get('/', gamesController.list);
        this.router.get('/:id', gamesController.getOne);
        this.router.post('/',gamesController.create);
        this.router.put('/:id',gamesController.updated);
        this.router.delete('/:id',gamesController.delete);
    }
}

const gameRoutes = new GameRoutes();
export default gameRoutes.router;