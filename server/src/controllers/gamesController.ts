import {  Request, Response } from 'express';

class GamesController {

    public index (req: Request, res: Response) {
        res.send('Juegos')
    }

}

export const gamesController = new GamesController();