import { Prisma } from ".prisma/client";
import { CreateProfileDto } from "src/profile/dto/create-profile.dto";

export class User{
    id?: number
    nome: string;
    sobrenome: string;
    email: string;
    senha: string;
    cpf: string;
    perfis?: CreateProfileDto[];
}
