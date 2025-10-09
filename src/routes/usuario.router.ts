import type { FastifyInstance } from "fastify";
import * as Controller_usuario from "../controllers/usuario.controller.js";

export async function rotas_usuario(fastify: FastifyInstance){

    fastify.get("/", Controller_usuario.get_usuarios);
    fastify.get("/:id", Controller_usuario.get_usuario_id);
    fastify.post("/", Controller_usuario.post_usuario);
    fastify.put("/:id", Controller_usuario.put_usuario);
    fastify.delete("/:id", Controller_usuario.delete_usuario);
};