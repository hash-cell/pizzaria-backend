import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class RemoveItemController {
    async handle(req: Request, res: Response) {
        const item_id = req.query.item_id as string;

        const removeOrder = await prisma.orderItem.delete({
            where:{
                id: item_id
            }
        })
        return res.json(removeOrder);
    }
}