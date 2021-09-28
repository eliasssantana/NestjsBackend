import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Perfil } from '.prisma/client';
import { Public } from '../auth/public.decorator'

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Public()
  @Post()
  async create(@Body() createProfileDto: CreateProfileDto):Promise<Perfil> {
    return await this.profileService.create(createProfileDto);
  }

  @Public()
  @Get()
  async findAll(): Promise<Perfil[]> {
    return await this.profileService.findAll();
  }

  @Public()
  @Get(':id')
  async findOne(@Param('id') id: string):Promise<Perfil> {
    return await this.profileService.findOne(+id);
  }

  @Public()
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateProfileDto: UpdateProfileDto): Promise<Perfil> {
    return await this.profileService.update(+id, updateProfileDto);
  }

  @Public()
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Perfil>{
    return await this.profileService.remove(+id);
  }
}
