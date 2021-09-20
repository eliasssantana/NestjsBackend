import { Perfil } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
export declare class ProfileService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreateProfileDto): Promise<Perfil>;
    addFavoriteGames(createProfile: CreateProfileDto): Promise<Perfil>;
    findAll(): Promise<Perfil[]>;
    findOne(id: number): Promise<Perfil>;
    update(id: number, updateProfileDto: UpdateProfileDto): Promise<Perfil>;
    remove(id: number): Promise<Perfil>;
}
