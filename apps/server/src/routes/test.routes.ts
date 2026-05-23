import express from "express";
import { prisma } from "../lib/prisma";

const router = express.Router();

router.get("/", async (_, res) => {
  const users = await prisma.user.findMany();

  res.json(users);
});

export default router;