import { Prisma } from ".prisma/client";
import { CreateGenreDto } from "src/genre/dto/create-genre.dto";

export class Game{
    id?: number;
    perfilId: number;
    capa: string;
    descricao: string;
    ano: number;
    nota_imdb: number;
    link_trailer: string;
    link_gameplay: string;
    Genero?: CreateGenreDto[];
}
