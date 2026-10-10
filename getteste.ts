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
const prisma = new PrismaClient({ adapter }); 


app.post('/adicionarusuario', async (req: Request, res: Response) => {
  try {
    const { nome, username, email } = req.body;

    const novoUsuario = await prisma.usuario.create({
      data: {
        nome,
        username,
        email
      }
    });

    res.status(201).json(novoUsuario);
  } catch (error) {
    console.error("ERRO AO CRIAR USUÁRIO:", error);
    res.status(500).json({ erro: "Erro ao criar usuário", detalhes: error.message });
  }
});

app.post('/adicionatreino', async (req: Request, res: Response) => {
  try{
      const novoTreino = await prisma.treino.create({
      data: {
        usuarioId: req.body.usuarioId,
        titulo: req.body.titulo,
        descricao: req.body.descricao
      }

    });
    res.status(201).json(novoTreino)
   }
   catch(error){
    console.error(error);
    res.status(500).send("Erro ao criar treino");
   }
   
});

app.get('/treinos', async (req: Request, res: Res ponse) => {
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