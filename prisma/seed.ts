import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import bcrypt from 'bcryptjs';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  
  await prisma.treino.deleteMany();
  await prisma.usuario.deleteMany();

  
  const passwordCarlos = await bcrypt.hash('carlos123', 10);
  const passwordAna = await bcrypt.hash('ana123', 10);

  // 3. Cria apenas os usuários para teste
  const usuario1 = await prisma.usuario.create({
    data: {
      nome: 'Carlos Silva',
      username: 'carlossilva',
      email: 'carlos@email.com',
      password: passwordCarlos,
    },
  });

  const usuario2 = await prisma.usuario.create({
    data: {
      nome: 'Ana Souza',
      username: 'anasouza',
      email: 'ana@email.com',
      password: passwordAna,
    },
  });

  console.log('Seed de usuários executado com sucesso!');
  
}

main()
  .catch((e) => {
    console.error('Erro ao executar o seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });