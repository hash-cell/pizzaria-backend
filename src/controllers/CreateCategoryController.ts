import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class CreateCategoryController {
    async handle(req: Request, res: Response) {
        const { name } = req.body;

        if(name === "") {
            return res.status(400).json({ error: "Name is invalid"});
        }
        
        const category = await prisma.category.create({
            data: {
                name: name,
            },
            select: {
                id: true,
                name: true
            }
        })
        return res.json(category);
    }
}