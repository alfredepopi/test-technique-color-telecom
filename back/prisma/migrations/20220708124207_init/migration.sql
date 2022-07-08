-- CreateTable
CREATE TABLE "Creneau" (
    "id" TEXT NOT NULL,
    "jours" TEXT NOT NULL,
    "horaire_ouverture" TEXT NOT NULL,
    "horaire_fermeture" TEXT NOT NULL,

    CONSTRAINT "Creneau_pkey" PRIMARY KEY ("id")
);
