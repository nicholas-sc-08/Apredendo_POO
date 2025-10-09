import Fastify from "fastify";
import cors from "@fastify/cors";
import { rotas_usuario } from "./routes/usuario.router.js";

const fastify = Fastify({ logger: true });

fastify.register(cors, { origin: "*" });
fastify.register(rotas_usuario, { prefix: "/usuarios"});

export default fastify;