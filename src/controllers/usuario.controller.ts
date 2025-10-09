import type { usuario_schema, usuario_update_schema } from "../zod/usuario.validation.js";
import type { I_usuario, I_create_usuario, I_update_usuario } from "../types/I_usuario.types.js";
import type { FastifyRequest, FastifyReply } from "fastify";
import * as Services_usuario from "../services/usuario.services.js";

export async function get_usuarios(req: FastifyRequest, reply: FastifyReply): Promise<void>{

    try {

        const usuarios: I_usuario[] | null = await Services_usuario.buscar_usuarios();

        if(usuarios){

            reply.status(200).send(usuarios);

        } else {
            
            reply.status(404).send({message: "Usuários não encontrado"});
        };
        
    } catch (erro: any) {
      
        reply.status(500).send({message: erro});
    };
};