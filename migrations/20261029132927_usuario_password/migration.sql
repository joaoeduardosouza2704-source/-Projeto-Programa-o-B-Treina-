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

-- CreateTable
CREATE TABLE "Exercicio" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "descanso" INTEGER,
    "treinoID" TEXT NOT NULL,

    CONSTRAINT "Exercicio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Serie" (
    "id" TEXT NOT NULL,
    "numero_serie" INTEGER NOT NULL,
    "repeticoes" INTEGER NOT NULL,
    "carga" DOUBLE PRECISION NOT NULL,
    "exercicioID" TEXT NOT NULL,

    CONSTRAINT "Serie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Suplemento" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "dosagem" TEXT NOT NULL,
    "horario" TEXT,
    "usuarioID" TEXT NOT NULL,

    CONSTRAINT "Suplemento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Treino" (
    "id" TEXT NOT NULL,
    "usuarioId" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT,
    "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "duracao_treino" INTEGER NOT NULL,

    CONSTRAINT "Treino_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Usuario" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_username_key" ON "Usuario"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- AddForeignKey
ALTER TABLE "AvaliacaoFisica" ADD CONSTRAINT "AvaliacaoFisica_usuarioID_fkey" FOREIGN KEY ("usuarioID") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Exercicio" ADD CONSTRAINT "Exercicio_treinoID_fkey" FOREIGN KEY ("treinoID") REFERENCES "Treino"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Serie" ADD CONSTRAINT "Serie_exercicioID_fkey" FOREIGN KEY ("exercicioID") REFERENCES "Exercicio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Suplemento" ADD CONSTRAINT "Suplemento_usuarioID_fkey" FOREIGN KEY ("usuarioID") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Treino" ADD CONSTRAINT "Treino_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
