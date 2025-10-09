import z from "zod";

export const usuario_schema = z.object({

    nome: z.string().min(1),
    email: z.email().min(1),
    senha: z.string().min(7)
});

export const usuario_update_schema = usuario_schema.partial();