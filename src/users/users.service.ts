import { PrismaPromise, Usuario } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { Perfil, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from'bcrypt'
import { ValidatorConstraint } from 'class-validator';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService){}
  async create(createUserDto: CreateUserDto): Promise<Usuario> {
   
    const perfisIds = createUserDto.perfisIds;
  
    delete createUserDto.perfisIds;
  
    const data: Prisma.UsuarioUncheckedCreateInput = {
      ...createUserDto,
      senha: await bcrypt.hash(createUserDto.senha, 10),
      perfis: {
        create: createUserDto.perfis,
        connect: perfisIds?.map((id) => ({ id })),
      },
    };
    const userData = await this.prisma.usuario.create({data, include: {perfis: true}})
  
    return {
      ...userData,
      senha: undefined
    }
  }


  async findAll(): Promise<Usuario[]> {
    return await this.prisma.usuario.findMany({ include: {perfis: true}});
  }

  async findOne(id: number): Promise<Usuario>{
    return await this.prisma.usuario.findUnique({
      where:{
        id
      }
    });
  }
  
  async findByEmail(email: string):Promise<Usuario> {
    return await this.prisma.usuario.findUnique({ where: { email } });
  }

  async findByCPF(cpf: string): Promise<Usuario>{
    return this.prisma.usuario.findUnique({
      where:{
        cpf
      }
    })
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<Usuario>{

    const {perfisIds} = updateUserDto;

    delete updateUserDto.perfisIds;

    const { perfisDisconnectIds } = updateUserDto;

    delete updateUserDto.perfisDisconnectIds;

    const data = {
      ...updateUserDto,
      perfis: {
        connect: perfisIds?.map((id) => ({ id })),
        disconnect: perfisDisconnectIds?.map((id) => ({ id })),
      },
    };


    return await this.prisma.usuario.update({
      where: {
        id
      },
      data: updateUserDto,
      include:{
        perfis: true
      }
    })
  }

  async remove(id: number): Promise<Usuario>{
    return this.prisma.usuario.delete({
      where:{
        id 
      }
    })
  }
}
