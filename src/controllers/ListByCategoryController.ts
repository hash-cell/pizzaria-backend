import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class ListByCategoryController {
    async handle(req: Request, res: Response) {
        const category_id = req.query.category_id as string;

        const findBycategory = await prisma.product.findMany({
            where: {
                category_id: category_id
            }
        });
        return res.json(findBycategory);
    }
}