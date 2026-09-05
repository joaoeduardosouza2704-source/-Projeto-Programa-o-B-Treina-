import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';

// Configuração do Prisma 7 com Adapter
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const app = express();
app.use(express.json()); // Permite receber JSON no body das requisições

app.get('/', async (req: Request, res: Response) => {
  try {
    // Exemplo: testando a conexão com o banco
    await prisma.$queryRaw`SELECT 1`;
    res.send('Hello World! API conectada ao banco de dados com Prisma 7!');
  } catch (error) {
    res.status(500).json({ error: 'Erro ao conectar no banco de dados.' });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});