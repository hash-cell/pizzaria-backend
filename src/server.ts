// src/server.ts
import express, { Request, Response } from 'express';
import { router } from './routes/routes'; // <--- Aponta para o arquivo de rotas

const app = express();
app.use(express.json());

app.use(router); // <--- Habilita as rotas

// Mantenha a porta 3333 para não dar erro de novo
const PORT = 3333; 

app.listen(PORT, () => console.log(`Server rodando na porta ${PORT}`));