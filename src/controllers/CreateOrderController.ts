import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class CreateOrderController {
    async handle(req: Request, res: Response) {
        const { table, name } = req.body;

        const order = await prisma.order.create({
            data: {
                table: table,
                name: name
            }
        });
        return res.json(order)
    }
}