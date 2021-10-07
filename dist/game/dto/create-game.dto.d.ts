import { Game } from "../entities/game.entity";
import { CreateGenreDto } from "src/genre/dto/create-genre.dto";
export declare class CreateGameDto extends Game {
    capa: string;
    titulo: string;
    descricao: string;
    ano: number;
    nota_imdb: number;
    link_trailer: string;
    link_gameplay: string;
    generos?: CreateGenreDto[];
    generosIds?: number[];
}
