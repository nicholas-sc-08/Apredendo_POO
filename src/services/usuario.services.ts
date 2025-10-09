import prisma from "../config/client.js";
import type { I_usuario, I_create_usuario, I_update_usuario } from "../types/I_usuario.types.js";

export async function buscar_usuarios(): Promise<I_usuario[] | null>{

    try {

        const usuarios: I_usuario[] = await prisma.usuario.findMany();
        return usuarios;
        
    } catch (erro: any) {
      
        console.error(erro);
        throw new Error("Erro no service buscar usuários!");
    };
};