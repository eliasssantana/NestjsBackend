import { Perfil } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
export declare class ProfileService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createProfileDto: CreateProfileDto): Promise<{
        id: number;
        titulo: string;
        imagem: string;
        usuarioId: number;
        jogos: import(".prisma/client").Jogo[];
    }>;
    findAll(): Promise<Perfil[]>;
    findOne(id: number): Promise<Perfil>;
    update(id: number, updateProfileDto: UpdateProfileDto): Promise<Perfil>;
    remove(id: number): Promise<Perfil>;
}
