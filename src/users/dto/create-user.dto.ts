import { Jogo, Perfil, Prisma, Usuario } from ".prisma/client";
import { IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsString, IsNumber, ValidateNested , MinLength, MaxLength, Matches} from "class-validator";
import { Type } from 'class-transformer'
import { User } from "../entities/user.entity";
import { CreateProfileDto } from "src/profile/dto/create-profile.dto";
import { IsCpfValid } from "../isCPFvalid.decorator";

export class CreateUserDto extends User{

    @IsOptional()
    id?: number

    @IsNotEmpty({
        message: "Campo não pode ser vazio"
    })
    @IsString({
        message: 'O tipo deve ser string'
    })
    nome: string;
    
    @IsNotEmpty({
        message: "Campo não pode ser vazio"
    })
    @IsString()
    sobrenome: string;

    @IsNotEmpty({
        message: "Campo não pode ser vazio"
    })
    @IsEmail({},{
        message: "Campo deve ser um email válido"
    })
    email: string;

    @IsString()
    @MinLength(4)
    @MaxLength(20)
    @Matches(/([A-Z])\w+/g, {
    message: 'password too weak',
    })
    @IsNotEmpty({
        message: "Campo não pode ser vazio"
    })
    @IsString()
    senha: string;

    @IsString()
    @IsCpfValid()
    cpf: string;

    @IsOptional()
    @IsBoolean()
    isAdmin?: boolean

    @IsOptional()
    @ValidateNested({ each: true })
    @Type(() => CreateProfileDto)
    perfis?: CreateProfileDto[];

    @IsOptional()
    @IsNumber({}, { each: true })
    perfisIds?: number[]
}
