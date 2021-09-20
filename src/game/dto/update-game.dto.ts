import { PartialType } from '@nestjs/mapped-types';
import { CreateGameDto } from './create-game.dto';
import { IsOptional, IsNumber } from 'class-validator';

export class UpdateGameDto extends PartialType(CreateGameDto) {
    @IsOptional()
    @IsNumber({}, { each: true })
    generosDisconnectIds?: number[];
}
