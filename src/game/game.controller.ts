import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GameService } from './game.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { Jogo } from '@prisma/client';
import { Public } from '../auth/public.decorator'

@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Public()
  @Post()
  async create(@Body() createGameDto: CreateGameDto): Promise<Jogo> {
    return await this.gameService.create(createGameDto);
  }

  @Public()
  @Get()
  async findAll(): Promise<Jogo[]> {
    return await this.gameService.findAll();
  }

  @Public()
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Jogo> {
    return await this.gameService.findOne(+id);
  }

  @Public()
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateGameDto: UpdateGameDto): Promise<Jogo> {
    return await this.gameService.update(+id, updateGameDto);
  }

  @Public()
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Jogo>{
    return await this.gameService.remove(+id);
  }
}
