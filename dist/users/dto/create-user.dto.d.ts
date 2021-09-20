import { User } from "../entities/user.entity";
import { CreateProfileDto } from "src/profile/dto/create-profile.dto";
export declare class CreateUserDto extends User {
    id?: number;
    nome: string;
    sobrenome: string;
    email: string;
    senha: string;
    cpf: string;
    isAdmin?: boolean;
    perfis?: CreateProfileDto[];
    perfisIds?: number[];
}
