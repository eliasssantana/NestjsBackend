import { CreateGameDto } from "src/game/dto/create-game.dto";
import { Profile } from "../entities/profile.entity";
export declare class CreateProfileDto extends Profile {
    id?: number;
    titulo: string;
    imagem: string;
    usuarioId?: number;
    jogosIds?: number[];
    jogos?: CreateGameDto[];
}
