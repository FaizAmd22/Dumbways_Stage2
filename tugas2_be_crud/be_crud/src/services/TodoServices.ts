import { Repository } from "typeorm"
import { AppDataSource } from "../data-source"
import { Todo } from "../entity/Todo"

export default new class TodoServices {
    private readonly TodoRepository: Repository<Todo> = AppDataSource.getRepository(Todo)

    async show(): Promise<object | string> {
        try {
            const response = await this.TodoRepository.find()
            return {
                message: "Succes to show Provinces!",
                data: response
            }
        } catch (error) {
            return `message: something error while showed provinces!`
        }
    }

    async create(data: any): Promise<object | string> {
        try {
            const response = await this.TodoRepository.save(data)
            return {
                message: "success creating Provinsi",
                data: response
            }
        } catch (error) {
            return `message: something wrong while added province!`
        }
    }

    async edit(id: number, data: any): Promise<object | string> {
        try {
            const findId = await this.TodoRepository.findOne({ where: { id } })
            
            if (!findId) {
                return { message: "Province not found!" }
            }

            await this.TodoRepository.update(id, data)
            return {
                message: "Success edit a province!",
                data: { ...findId, ...data}
            }
        } catch (error) {
            return `message: something wrong while edited province!`
        }
    }

    async delete(id: number): Promise<object | string> {
        try {
            const findId = await this.TodoRepository.findOne({ where: { id } })
            
            if (!findId) {
                return { message: "Province not found!" }
            }

            await this.TodoRepository.delete(id)
            return {
                message: "Success delete a province!",
                data: findId
            }
        } catch (error) {
            return `message: something wrong while deleted province!`
        }
    }
}