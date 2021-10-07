import { CreateGameDto } from "src/game/dto/create-game.dto";
export declare class Profile {
    id?: number;
    titulo: string;
    imagem: string;
    jogosIds?: number[];
    usuarioId?: number;
    jogos?: CreateGameDto[];
}
