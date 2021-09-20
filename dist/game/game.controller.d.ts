import { GameService } from './game.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { Jogo } from '@prisma/client';
export declare class GameController {
    private readonly gameService;
    constructor(gameService: GameService);
    create(createGameDto: CreateGameDto): Promise<Jogo>;
    findAll(): Promise<Jogo[]>;
    findOne(id: string): Promise<Jogo>;
    update(id: string, updateGameDto: UpdateGameDto): Promise<Jogo>;
    remove(id: string): Promise<Jogo>;
}
