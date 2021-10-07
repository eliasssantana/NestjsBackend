import { Injectable } from '@nestjs/common';
import { Prisma, Perfil } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfileService {
  constructor(private readonly prisma: PrismaService){}
  async create(createProfileDto: CreateProfileDto) {
    const jogosIds = createProfileDto.jogosIds;
  
    delete createProfileDto.jogosIds;
  
    const data: Prisma.PerfilUncheckedCreateInput = {
      ...createProfileDto,
      jogos: {
        create: createProfileDto.jogos,
        connect: jogosIds.map((id) => ({ id })),
      },
    };
    const profileData = await this.prisma.perfil.create({data: data})
  
    return {
      ...profileData
    }
  }



  async findAll(): Promise<Perfil[]> {
    return await this.prisma.perfil.findMany({
      include:{
        jogos: true,
        usuario: true
      }
    });
  }

  async findOne(id: number): Promise<Perfil> {
    return await this.prisma.perfil.findUnique({where:{ id }, include: {usuario: true, jogos: true}})
  }

  async update(id: number, updateProfileDto: UpdateProfileDto): Promise<Perfil>{
    const {jogosIds} = updateProfileDto;

    delete updateProfileDto.jogosIds;

    const { jogosDisconnectIds } = updateProfileDto;

    delete updateProfileDto.jogosDisconnectIds;

    const data = {
      ...updateProfileDto,
      jogos: {
        connect: jogosIds?.map((id) => ({ id })),
        disconnect: jogosDisconnectIds?.map((id) => ({ id:id })),
      },
    };


    return await this.prisma.perfil.update({
      where: {
        id
      },
      data: data,
      include:{
        jogos: true,
        usuario: true
      }
    })
  }

  async remove(id: number): Promise<Perfil> {
    return await this.prisma.perfil.delete({
      where:{
        id
      }
    });
  }
}
