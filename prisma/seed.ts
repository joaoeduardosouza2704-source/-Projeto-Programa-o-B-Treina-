import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

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
            titulo: 'Treino A - Peito e Tríceps',
            descricao: 'Supino reto, supino inclinado e tríceps testa.',
          },
          {
            titulo: 'Treino B - Costas e Bíceps',
            descricao: 'Puxada alta, remunada curvada e rosca direta.',
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