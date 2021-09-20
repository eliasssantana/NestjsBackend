import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GenreService } from './genre.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { Genero } from '.prisma/client';

@Controller('genre')
export class GenreController {
  constructor(private readonly genreService: GenreService) {}

  @Post()
  async create(@Body() createGenreDto: CreateGenreDto): Promise<Genero> {
    return await this.genreService.create(createGenreDto);
  }

  @Get()
  async findAll(): Promise<Genero[]> {
    return await this.genreService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Genero> {
    return await this.genreService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateGenreDto: UpdateGenreDto): Promise<Genero> {
    return await this.genreService.update(+id, updateGenreDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Genero> {
    return await this.genreService.remove(+id);
  }
}
