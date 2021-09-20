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
exports.ProfileService = void 0;
const common_1 = require("@nestjs/common");
const create_game_dto_1 = require("../game/dto/create-game.dto");
const prisma_service_1 = require("../prisma/prisma.service");
let ProfileService = class ProfileService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
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
        });
    }
    async addFavoriteGames(createProfile) {
        const jogosIds = createProfile.jogosId;
        delete createProfile.jogosId;
        const data = Object.assign(Object.assign({}, createProfile), { jogos: {
                create: createProfile.jogo,
                connect: jogosIds.map(id => ({ id }))
            } });
        const gameAdded = await this.prisma.perfil.create({ data, include: { jogos: true } });
        return Object.assign({}, gameAdded);
    }
    async findAll() {
        return await this.prisma.perfil.findMany();
    }
    async findOne(id) {
        return await this.prisma.perfil.findUnique({ where: { id } });
    }
    async update(id, updateProfileDto) {
        return await this.prisma.perfil.update({
            where: {
                id
            },
            data: updateProfileDto
        });
    }
    async remove(id) {
        return await this.prisma.perfil.delete({
            where: {
                id
            }
        });
    }
};
ProfileService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProfileService);
exports.ProfileService = ProfileService;
//# sourceMappingURL=profile.service.js.map