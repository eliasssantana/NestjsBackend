import { ProfileService } from './profile.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Perfil } from '.prisma/client';
export declare class ProfileController {
    private readonly profileService;
    constructor(profileService: ProfileService);
    create(createProfileDto: CreateProfileDto): Promise<{
        id: number;
        titulo: string;
        imagem: string;
        usuarioId: number;
        jogos: import(".prisma/client").Jogo[];
    }>;
    findAll(): Promise<Perfil[]>;
    findOne(id: string): Promise<Perfil>;
    update(id: string, updateProfileDto: UpdateProfileDto): Promise<Perfil>;
    remove(id: string): Promise<Perfil>;
}
