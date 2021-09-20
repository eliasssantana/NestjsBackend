import { Genre } from "../entities/genre.entity";
import { CreateGameDto } from "src/game/dto/create-game.dto";
export declare class CreateGenreDto extends Genre {
    id?: number;
    nome: string;
    jogos?: CreateGameDto[];
    jogosIds?: number[];
}
