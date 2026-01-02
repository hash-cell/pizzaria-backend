import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { hash } from 'bcryptjs';

const prisma = new PrismaClient();

export class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, email, password } = req.body;

    const userAlreadyExists = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (userAlreadyExists) {
      return res.status(400).json({ error: "User already exists" });
    }

    const passwordHash = await hash(password, 8);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: passwordHash,
      },

      select: {
        id: true,
        name: true,
        email: true,
      }
    });

    return res.json(user);
  }
}