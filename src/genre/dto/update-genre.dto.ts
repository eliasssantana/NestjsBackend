import { PartialType } from '@nestjs/mapped-types';
import { CreateGenreDto } from './create-genre.dto';
import { IsOptional, IsNumber } from 'class-validator';

export class UpdateGenreDto extends PartialType(CreateGenreDto) {
    @IsOptional()
    @IsNumber({}, { each: true })
    jogosDisconnectIds?: number[];
}
