import { Injectable } from '@nestjs/common';
import { Prisma, Perfil } from '@prisma/client';
import { CreateGameDto } from 'src/game/dto/create-game.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfileService {
  constructor(private readonly prisma: PrismaService){}
  async create(data: CreateProfileDto): Promise<Perfil> {
    return await this.prisma.perfil.create({
      data: data,
      include: {
        usuario: {
          select: {
            nome: true,
            sobrenome: true
          }
        }
      }
    })
}

  async addFavoriteGames(createProfile: CreateProfileDto): Promise<Perfil>{
    const jogosIds = createProfile.jogosId

    delete createProfile.jogosId

    const data: Prisma.PerfilUncheckedCreateInput = {
        ...createProfile,
        jogos: {
            create: createProfile.jogo,
            connect: jogosIds.map(id => ({id}))
        }
    }

    const gameAdded = await this.prisma.perfil.create({data, include: {jogos: true}})

    return{
      ...gameAdded
    }

  }

  async findAll(): Promise<Perfil[]> {
    return await this.prisma.perfil.findMany();
  }

  async findOne(id: number): Promise<Perfil> {
    return await this.prisma.perfil.findUnique({where:{ id }})
  }

  async update(id: number, updateProfileDto: UpdateProfileDto): Promise<Perfil>{
    return await this.prisma.perfil.update({
      where: {
        id
      },
      data: updateProfileDto
    });
  }

  async remove(id: number): Promise<Perfil> {
    return await this.prisma.perfil.delete({
      where:{
        id
      }
    });
  }
}
