import { GenreService } from './genre.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { Genero } from '.prisma/client';
export declare class GenreController {
    private readonly genreService;
    constructor(genreService: GenreService);
    create(createGenreDto: CreateGenreDto): Promise<Genero>;
    findAll(): Promise<Genero[]>;
    findOne(id: string): Promise<Genero>;
    update(id: string, updateGenreDto: UpdateGenreDto): Promise<Genero>;
    remove(id: string): Promise<Genero>;
}
