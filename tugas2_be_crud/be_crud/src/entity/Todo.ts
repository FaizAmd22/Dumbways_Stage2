import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity({ name: "todos"})
export class Todo {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string
}
