import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
export declare class GenreService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreateGenreDto): Promise<import(".prisma/client").Genero>;
    findAll(): Promise<import(".prisma/client").Genero[]>;
    findOne(id: number): Promise<import(".prisma/client").Genero>;
    update(id: number, updateGenreDto: UpdateGenreDto): Promise<import(".prisma/client").Genero>;
    remove(id: number): Promise<import(".prisma/client").Genero>;
}
