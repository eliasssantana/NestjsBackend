import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { GenreService } from './genre.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { Genero } from '.prisma/client';
import { Public } from 'src/auth/public.decorator';

@Controller('genre')
export class GenreController {
  constructor(private readonly genreService: GenreService) {}

  @Public()
  @HttpCode(HttpStatus.CREATED)
  @Post()
  async create(@Body() createGenreDto: CreateGenreDto): Promise<Genero> {
    return await this.genreService.create(createGenreDto);
  }

  @Public()
  @HttpCode(HttpStatus.OK)
  @Get()
  async findAll(): Promise<Genero[]> {
    return await this.genreService.findAll();
  }

  @Public()
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Genero> {
    return await this.genreService.findOne(+id);
  }

  @Public()
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateGenreDto: UpdateGenreDto): Promise<Genero> {
    return await this.genreService.update(+id, updateGenreDto);
  }

  @Public()
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Genero> {
    return await this.genreService.remove(+id);
  }
}
