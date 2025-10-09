import fastify from "./fastify.js";
import { configDotenv } from "dotenv";

configDotenv();

const port: number = Number(process.env.PORT);

fastify.listen({ port: port }, () => console.log("Server rodando com sucesso!"));