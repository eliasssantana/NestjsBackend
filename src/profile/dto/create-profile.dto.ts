import { Prisma} from ".prisma/client";
import { IsEmail, IsInt, IsNotEmpty, IsOptional, IsString, IsUrl } from "class-validator";
import { CreateGameDto } from "src/game/dto/create-game.dto";
import { Profile } from "../entities/profile.entity";

export class CreateProfileDto extends Profile{

    id?: number;
    
    @IsNotEmpty({
        message: "titulo precisa ser preenchido"
    })
    @IsString({
        message: "titulo deve ser uma string"
    })
    titulo: string;
    
    @IsNotEmpty({
        message: "Você deve passar uma imagem"
    })
    @IsString({
        message: "imagem deve ser a url da imagem"
    })
    @IsUrl({
        require_protocol:true
    })
    imagem: string;

    @IsOptional()
    @IsInt()
    usuarioId?: number;

    @IsOptional()
    @IsInt()
    jogosId?: number[]

    @IsOptional()
    jogo?: CreateGameDto[]
}
