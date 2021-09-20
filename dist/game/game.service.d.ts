import { Jogo } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
export declare class GameService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createGameDto: CreateGameDto): Promise<Jogo>;
    findAll(): Promise<Jogo[]>;
    findOne(id: number): Promise<Jogo>;
    update(id: number, updateGameDto: UpdateGameDto): Promise<Jogo>;
    remove(id: number): Promise<Jogo>;
}
