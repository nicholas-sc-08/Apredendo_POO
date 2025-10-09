import { usuario_schema, type usuario_update_schema } from "../zod/usuario.validation.js";
import type { I_usuario, I_create_usuario, I_update_usuario, Get_params_usuario } from "../types/I_usuario.types.js";
import type { FastifyRequest, FastifyReply } from "fastify";
import * as Services_usuario from "../services/usuario.services.js";
import bcrypt from "bcrypt";

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

export async function get_usuario_id(req: FastifyRequest<{Params: Get_params_usuario}>, reply: FastifyReply): Promise<void>{

    try {

        const { id } = req.params;
        const usuario: I_usuario | null = await Services_usuario.buscar_usuario_id(id);

        if(usuario){

            reply.status(200).send(usuario);
        } else {

            reply.status(404).send({message: "Usuário não encontrado pelo ID"});
        };
        
    } catch (erro: any) {
      
        reply.status(500).send({message: erro});
    };
};

export async function post_usuario(req: FastifyRequest<{Body: I_create_usuario}>, reply: FastifyReply): Promise<void>{

    try {

        const data = usuario_schema.parse(req.body);
        const senha_criptografada = await bcrypt.hash(data.senha, 10);
        const usuario_atualizado = {...data, senha: senha_criptografada};
        const usuario: I_usuario = await Services_usuario.cadastrar_usuario(usuario_atualizado);
        reply.status(201).send(usuario);

    } catch (erro) {
      
        reply.status(500).send({message: "Erro ao fazer post dos dados do usuários"});
    };
};