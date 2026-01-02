import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class CreateProductController {
    async handle(req: Request, res: Response) {
        const { name, price, description, banner, category_id } = req.body;

        if(!req.file) {
            throw new Error(`error upload file`)
        } else {
 
        const { originalname, filename: banner } = req.file; 
        const product = await prisma.product.create({
            data: {
                name, 
                price,
                description,
                banner,
                category_id,
            }
        })
        return res.json(product)
                    
        }
    }
}