import { Postagem } from "./Postagem"

export class Tema {
    public id: number
    public titulo: string
    public tag: string
    public postagem: Postagem[]
}