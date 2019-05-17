import { Request, Response } from "express";
import pool from "../database";

class GamesController {
  public async list(req: Request, res: Response) {
    const result = await pool.query("SELECT * FROM games");
    res.json({ result });
  }

  public async getOne(req: Request, res: Response) {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM games WHERE id = ?", [id]);
    if (result.length > 0) {
      return res.json(result[0]);
    }
    res.status(404).json({ result: "Error al Buscar el Juego " + result.title });
  }

  public async create(req: Request, res: Response) {
    const { title, description, image } = req.body;
    const result = await pool.query("INSERT INTO games SET ?", [{ title, description, image }]);
    if (result.serverStatus === 2) {
      res.json({ result: "Se Inserto el Juego " + title });
    } else {
      res.json({ result: "Error al Insertar el Juego " + title });
    }
  }

  public async updated(req: Request, res: Response) {
    const { id } = req.params;
    const { title, description, image } = req.body;
    const result = await pool.query("UPDATE games set ? WHERE id = ?", [{ title, description, image }, id]);
    if (result.serverStatus === 2) {
      res.json({ result: "Se Actualizo el Juego " + title + " Correctamente" });
    } else {
      res.json({ result: "Error al Actualizanr el Juego " + title });
    }
  }

  public async delete(req: Request, res: Response) {
    const { id } = req.params;
    const resul = await pool.query("SELECT * FROM games WHERE id = ?", [id]);
    if (resul.length > 0) {
      const sql = await pool.query("DELETE FROM games WHERE id = ?", [id]);
      if (sql.serverStatus === 2) {
        res.json({ result: "Se Elimino el Juego Correctamente" });
      } else {
        res.json({ result: "Error al Eliminar el Juego" });
      }
    } else {
      res.json({ result: "El Juego seleccionado no se Encontro " });
    }
  }
}

export const gamesController = new GamesController();
