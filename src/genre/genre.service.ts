import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from "@prisma/client";
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';

@Injectable()
export class GenreService {
  constructor(private readonly prisma: PrismaService){}
  async create(dto: CreateGenreDto){
    const data: Prisma.GeneroCreateInput = {
      ...dto,
      jogos: {
          create: dto.jogos || [],
      },
  };

  return await this.prisma.genero.create({
      data,
  });
}

  async findAll() {
    return await this.prisma.genero.findMany({
      include:{
        jogos: {
          select:{
            titulo:true,
            descricao:true,
            nota_imdb:true
          },
          orderBy:{
            titulo: 'asc'
          }
        }
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
    const data: Prisma.GeneroUpdateInput = {
      ...updateGenreDto,
      jogos: {
          create: updateGenreDto.jogos || []
      },
  };

  return await this.prisma.genero.update({
      where: {
          id,
      },
      data,
  });
  }

  async remove(id: number) {
    return await this.prisma.genero.delete({
      where: {
        id
      }
    });
  }
}
