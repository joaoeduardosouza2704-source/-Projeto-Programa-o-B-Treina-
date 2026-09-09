import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

export class UserRepository {
  
  async todosUsuarios() {
    return await prisma.usuario.findMany();
  }

  async acharUsuario(id: number) {
    return await prisma.usuario.findUnique({
      where: {
        id: id,
      },
    });
  }

}