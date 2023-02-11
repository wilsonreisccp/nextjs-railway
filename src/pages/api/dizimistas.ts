import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    // get all dizimistas
    const dizimistas = await prisma.dizimista.findMany({
      orderBy: { created_at: "desc" },
    });
    res.json(dizimistas);
  }
};
