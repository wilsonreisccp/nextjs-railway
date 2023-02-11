-- CreateTable
CREATE TABLE "dizimistas" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "dt_nascimento" TIMESTAMP(3) NOT NULL,
    "sexo" TEXT NOT NULL,
    "telefone" TEXT,
    "celular" TEXT,
    "email" TEXT,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "lougradouro" TEXT,
    "numero" TEXT,
    "complemento" TEXT,
    "bairro" TEXT,
    "cidade" TEXT,
    "cep" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "controle" INTEGER,
    "observacao" TEXT,

    CONSTRAINT "dizimistas_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "dizimistas_id_key" ON "dizimistas"("id");
