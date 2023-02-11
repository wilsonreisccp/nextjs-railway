import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import Cors from 'cors';

const prisma = new PrismaClient();

// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ['GET', 'POST', 'OPTIONS'],
  })
);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // Run cors
  await cors(req, res);
  if (req.method === "GET") {
    // get all dizimistas
    const dizimistas = await prisma.dizimista.findMany({
      orderBy: { created_at: "desc" },
    });
    res.json(dizimistas);
  }
};


function initMiddleware(middleware) {
  return (req, res) =>
    new Promise((resolve, reject) => {
      middleware(req, res, (result) => {
        if (result instanceof Error) {
          return reject(result)
        }
        return resolve(result)
      })
    })
}