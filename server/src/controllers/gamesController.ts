import { Request, Response } from "express";
import pool from "../database";

class GamesController {
  public list(req: Request, res: Response) {
    res.json({ text: "Buscando Todos Juego" });
  }

  public getOne(req: Request, res: Response) {
    res.json({ text: "Buscando un Juego " + req.params.id });
  }

  public async create(req: Request, res: Response) {
    const { title, description, image } = req.body;
    const result = await pool.query("INSERT INTO games SET ?", [
      { title, description, image }
    ]);
    console.log(result.affectedRows);
    if (result.affectedRows != 0) {
      res.json({ title, description, image });
    } else {
      res.json({ text: "error" });
    }
  }

  public updated(req: Request, res: Response) {
    res.json({ text: "Actualizando un juego " + req.params.id });
  }

  public delete(req: Request, res: Response) {
    res.json({ text: "Eliminando un juego " + req.params.id });
  }
}

export const gamesController = new GamesController();
