import { Prisma } from ".prisma/client";
import { CreateGameDto } from "src/game/dto/create-game.dto";

export class Profile{
  id?: number;
  titulo: string;
  imagem: string;
  jogosIds?: number[];
  usuarioId?: number;
  jogos?: CreateGameDto[]
}