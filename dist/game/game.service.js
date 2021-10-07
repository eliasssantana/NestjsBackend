"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let GameService = class GameService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createGameDto) {
        const generosIds = createGameDto.generosIds;
        delete createGameDto.generosIds;
        const data = Object.assign(Object.assign({}, createGameDto), { generos: {
                create: createGameDto.generos,
                connect: generosIds.map((id) => ({ id })),
            } });
        const gameData = await this.prisma.jogo.create({ data, include: { generos: true } });
        return Object.assign({}, gameData);
    }
    async findAll() {
        return await this.prisma.jogo.findMany({
            include: {
                generos: {
                    select: {
                        nome: true
                    }
                }
            },
            orderBy: {
                titulo: 'asc'
            }
        });
    }
    async findOne(id) {
        return await this.prisma.jogo.findUnique({
            where: {
                id
            },
            include: {
                generos: {
                    select: {
                        nome: true
                    }
                },
                perfis: true
            }
        });
    }
    async update(id, updateGameDto) {
        const { generosIds } = updateGameDto;
        delete updateGameDto.generosIds;
        const { generosDisconnectIds } = updateGameDto;
        delete updateGameDto.generosDisconnectIds;
        const data = Object.assign(Object.assign({}, updateGameDto), { generos: {
                connect: generosIds === null || generosIds === void 0 ? void 0 : generosIds.map((id) => ({ id })),
                disconnect: generosDisconnectIds === null || generosDisconnectIds === void 0 ? void 0 : generosDisconnectIds.map((id) => ({ id: id })),
            } });
        return await this.prisma.jogo.update({
            where: {
                id
            },
            data: data,
            include: {
                generos: true,
                perfis: true
            }
        });
    }
    async remove(id) {
        return await this.prisma.jogo.delete({
            where: {
                id
            },
            include: {
                generos: true
            }
        });
    }
};
GameService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], GameService);
exports.GameService = GameService;
//# sourceMappingURL=game.service.js.map