import 'dotenv/config';
import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

const app = express();
app.use(express.json());

// Configuração única do banco e do PrismaClient
const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter }); // Declarado apenas uma vez!

app.get('/treinos', async (req: Request, res: Response) => {
  try {
    const treinos = await prisma.treino.findMany({
      include: {
        usuario: true,
      },
    });

    return res.json(treinos);
  } catch (error) {
    // Altere para imprimir o erro real no console do terminal
    console.error('Erro detalhado:', error);
    return res.status(500).json({ error: 'Erro ao buscar treinos', detalhes: String(error) });
  }
});

app.listen(3333, () => {
  console.log('Servidor rodando na porta 3333');
});