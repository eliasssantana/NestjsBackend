import { Prisma } from ".prisma/client";

export class Profile{
  jogosId?: number[];
  usuarioId?: number;
  id?: number;
  titulo: string;
  imagem: string;
}