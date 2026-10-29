import 'dotenv/config'; 
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

// ... resto do código da função main() ...
async function main() {
  await prisma.treino.deleteMany();
  await prisma.usuario.deleteMany();

  const usuario = await prisma.usuario.create({
    data: {
      nome: 'Carlos Silva',
      username: 'carlossilva',
      email: 'carlos@email.com',
      treinos: {
        create: [
          {
            titulo: 'Musculação - Força e Hipertrofia',
            descricao: 'Treino focado em progressão de carga.',
            duracao_treino: 60, // 60 minutos (1 hora)
          },
          {
            titulo: 'Treino de Jiu-Jitsu',
            descricao: 'Prática de posições, quedas e rola.',
            duracao_treino: 90, // 90 minutos (1h30)
          },
          {
            titulo: 'Tiro na Esteira (Sprint)',
            descricao: 'Treino intervalado de alta intensidade (HIIT) na esteira.',
            duracao_treino: 30, // 30 minutos
          },
        ],
      },
    },
    include: {
      treinos: true,
    },
  });

  console.log('Seed executado com sucesso!', usuario);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });