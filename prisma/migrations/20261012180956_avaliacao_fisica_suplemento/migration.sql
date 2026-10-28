-- CreateTable
CREATE TABLE "Suplemento" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "dosagem" TEXT NOT NULL,
    "horario" TEXT NOT NULL,
    "usuarioID" TEXT NOT NULL,

    CONSTRAINT "Suplemento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AvaliacaoFisica" (
    "id" TEXT NOT NULL,
    "peso_corporal" DOUBLE PRECISION NOT NULL,
    "gordura_corporal" DOUBLE PRECISION NOT NULL,
    "idade" INTEGER NOT NULL,
    "peso_desejado" DOUBLE PRECISION NOT NULL,
    "gordura_corporal_desejada" DOUBLE PRECISION NOT NULL,
    "usuarioID" TEXT NOT NULL,

    CONSTRAINT "AvaliacaoFisica_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Suplemento" ADD CONSTRAINT "Suplemento_usuarioID_fkey" FOREIGN KEY ("usuarioID") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AvaliacaoFisica" ADD CONSTRAINT "AvaliacaoFisica_usuarioID_fkey" FOREIGN KEY ("usuarioID") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
