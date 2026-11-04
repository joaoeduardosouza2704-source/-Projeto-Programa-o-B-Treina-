import type { Request, Response, NextFunction } from "express";
import * as usersServices from "./users.services";
import { User } from "./users.entity";

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - username
 *         - email
 *         - password
 *       properties:
 *         id:
 *           type: integer
 *           description: ID gerado automaticamente
 *         name:
 *           type: string
 *           description: Nome completo do usuário
 *         username:
 *           type: string
 *           description: Nome de usuário (único)
 *         email:
 *           type: string
 *           description: E-mail do usuário
 *         password:
 *           type: string
 *           description: Senha do usuário
 *         criadoEm:
 *           type: string
 *           format: date-time
 *           description: Data de criação do usuário
 *       example:
 *         id: 1
 *         name: "João Silva"
 *         username: "joaosilva"
 *         email: "joao@email.com"
 *         password: "senha123_segura"
 *         criadoEm: "2026-11-04T12:00:00.000Z"
 */

export async function getAll(req: Request, res: Response, next: NextFunction) {
  try {
    const users = await usersServices.ListallUsers();
    res.json(users);
  } catch (err) {
    next(err);
  }
}

export async function create(req: Request, res: Response, next: NextFunction) {
  try {
    const dadosBody = req.body;
    const usuarioCriado = await usersServices.New_User(dadosBody);
    res.json(usuarioCriado);
  } catch (err) {
    next(err);
  }
}

export async function findByID(req: Request, res: Response, next: NextFunction) {
  try {
    const id = req.params.id;
    const user = await usersServices.ListaUser(id);
    res.json(user);
  } catch (err) {
    next(err);
  }
}

export async function updateUser(req: Request, res: Response, next: NextFunction) {
  try {
    const username = req.params.username;
    const novo_username = req.body.novo_username;
    const usuarioAtualizado = await usersServices.atualizaUsername(novo_username, username);
    res.json(usuarioAtualizado);
  } catch (err) {
    next(err);
  }
}

export async function Delete(req: Request, res: Response, next: NextFunction) {
  try {
    const username = req.params.username;
    await usersServices.deleteUsername(username);
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
}