import { IsNumber, IsString, ValidateNested,IsOptional} from "class-validator";
import { Type } from "class-transformer";
import { Game } from "../entities/game.entity";
import { CreateGenreDto } from "src/genre/dto/create-genre.dto";

export class CreateGameDto extends Game{
    @IsString({
        message: "capa deve ser uma string"
    })
    capa: string;
    
    @IsString()
    titulo: string;

    @IsString({
        message: "descricao deve ser uma string"
    })
    descricao: string;

    @IsNumber({},{
        message: "ano deve ser do tipo number"
    })
    ano: number;

    @IsNumber({}, {
        message: "nota_imdb deve ser do tipo number"
    })
    nota_imdb: number;

    @IsString({
        message: "link_trailer deve ser uma string"
    })
    link_trailer: string;

    @IsString({
        message: "link_gameplay deve ser uma string"
    })
    link_gameplay: string;
    
    @IsOptional()
    @ValidateNested({ each: true })
    @Type(() => CreateGenreDto)
    generos?: CreateGenreDto[];

    @IsOptional()
    @IsNumber({}, { each: true })
    generosIds?: number[];
}
