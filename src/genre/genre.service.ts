import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';

@Injectable()
export class GenreService {
  constructor(private readonly prisma: PrismaService){}
  async create(data: CreateGenreDto){
    return await this.prisma.genero.create({
      data
    })
  }

  async findAll() {
    return await this.prisma.genero.findMany({
      orderBy: {
        nome: 'asc'
      }
    });
  }

  async findOne(id: number) {
    return await this.prisma.genero.findUnique({
      where: {
        id
      }
    });
  }

  async update(id: number, updateGenreDto: UpdateGenreDto) {
    return await this.prisma.genero.update({
      where: {
        id
      },data: updateGenreDto
    })
  }

  async remove(id: number) {
    return await this.prisma.genero.delete({
      where: {
        id
      }
    });
  }
}
