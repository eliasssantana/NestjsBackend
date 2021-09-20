import { IsNumber, IsNotEmpty, IsString, IsOptional, ValidateNested} from "class-validator";
import { Type } from 'class-transformer'
import { Genre } from "../entities/genre.entity";
import { CreateGameDto } from "src/game/dto/create-game.dto";

export class CreateGenreDto extends Genre{
    id?: number;

    @IsString({
        message: "'nome' deve ser uma string"
    })
    nome: string;
    @IsOptional()
    @ValidateNested({ each: true })
    @Type(() => CreateGameDto)
    jogos?: CreateGameDto[];

    @IsOptional()
    @IsNumber({}, { each: true })
    jogosIds?: number[];
}
