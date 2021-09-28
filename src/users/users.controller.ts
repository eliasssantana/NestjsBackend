import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Perfil, Usuario } from '.prisma/client';
import { Public } from '../auth/public.decorator';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Public()
  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<Usuario> {
    return await this.usersService.create(createUserDto);
  }

  @Public()
  @Get()
  async findAll(): Promise<Usuario[]>{
    return await this.usersService.findAll();
  }

  @Public()
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Usuario>{
    return await this.usersService.findOne(+id);
  }

  @Public()
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto): Promise<Usuario>{
    return await this.usersService.update(+id, updateUserDto);
  }
  
  @Public()
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Usuario>{
    return await this.usersService.remove(+id);
  }
}
