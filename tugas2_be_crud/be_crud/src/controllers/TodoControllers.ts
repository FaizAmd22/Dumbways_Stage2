import { Request, Response } from "express";
import TodoServices from "../services/TodoServices";

export default new class TodoControllers {
    async showProvinsi(req: Request, res: Response) {
        try {
            const response = await TodoServices.show()

            return res.status(201).json(response)
        } catch {
            return res.status(500).json({message: "Internal server error"})
        }
    }

    async createProvinsi(req: Request, res: Response) {
        try {
            const data = req.body

            const response = await TodoServices.create(data)

            return res.status(201).json(response)
        } catch (error) {
            return res.status(500).json({ message: "Internal server error" })
        }
    }
    
    async editProvince(req: Request, res: Response) {
        try {
            const {id} = req.params
            const numberId = Number(id)

            if (!numberId) {
                return res.status(400).json({message: "Invalid ID format!"})
            }

            const data = req.body
            const response = await TodoServices.edit(numberId, data)

            return res.status(200).json(response)
        } catch (error) {
            return res.status(500).json({ message: "Internal server error" })
        }
    }

    async deleteProvince(req: Request, res: Response) {
        try {
            const { id } = req.params
            const numberId = parseInt(id)

            if (!numberId) {
                return res.status(401).json({message: "Invalid ID format!"})
            }

            const response = await TodoServices.delete(numberId)

            return res.status(200).json(response)
        } catch (error) {
            return res.status(500).json({message: "Internal server error"})
        }
    }
}