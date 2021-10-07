import { Jogo, Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';

@Injectable()
export class GameService {
  constructor(private readonly prisma: PrismaService){}
  async create(createGameDto: CreateGameDto): Promise<Jogo>{
    const generosIds = createGameDto.generosIds;
  
    delete createGameDto.generosIds;
  
    const data: Prisma.JogoUncheckedCreateInput = {
      ...createGameDto,
      generos: {
        create: createGameDto.generos,
        connect: generosIds.map((id) => ({ id })),
      },
    };
    const gameData = await this.prisma.jogo.create({data, include: {generos: true}})
  
    return {
      ...gameData
    }
  }
  async findAll(): Promise<Jogo[]>{
    return await this.prisma.jogo.findMany({
      include: {
        generos: {
          select:{
            nome: true
          }
        }
      },
      orderBy:{
        titulo: 'asc'
      }
    })
  }


  async findOne(id: number): Promise<Jogo>{
    return await this.prisma.jogo.findUnique({
      where:{
        id
      },
      include: {
        generos: {
          select:{
            nome: true
          }
        },
        perfis: true
      }
    });
  }


  async update(id: number, updateGameDto: UpdateGameDto): Promise<Jogo>{
    const {generosIds} = updateGameDto;

    delete updateGameDto.generosIds;

    const { generosDisconnectIds } = updateGameDto;

    delete updateGameDto.generosDisconnectIds;

    const data = {
      ...updateGameDto,
      generos: {
        connect: generosIds?.map((id) => ({ id })),
        disconnect: generosDisconnectIds?.map((id) => ({ id:id })),
      },
    };


    return await this.prisma.jogo.update({
      where: {
        id
      },
      data:data,
      include:{
        generos: true,
        perfis: true
      }
    })
  }

  async remove(id: number): Promise<Jogo>{
    return await this.prisma.jogo.delete({
      where:{
        id
      },
      include: {
        generos: true
      }
    })
  }
}