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
const prisma_service_1 = require("../prisma/prisma.service");
let ProfileService = class ProfileService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createProfileDto) {
        const jogosIds = createProfileDto.jogosIds;
        delete createProfileDto.jogosIds;
        const data = Object.assign(Object.assign({}, createProfileDto), { jogos: {
                create: createProfileDto.jogos,
                connect: jogosIds.map((id) => ({ id })),
            } });
        const profileData = await this.prisma.perfil.create({ data: data });
        return Object.assign({}, profileData);
    }
    async findAll() {
        return await this.prisma.perfil.findMany({
            include: {
                jogos: true,
                usuario: true
            }
        });
    }
    async findOne(id) {
        return await this.prisma.perfil.findUnique({ where: { id }, include: { usuario: true, jogos: true } });
    }
    async update(id, updateProfileDto) {
        const { jogosIds } = updateProfileDto;
        delete updateProfileDto.jogosIds;
        const { jogosDisconnectIds } = updateProfileDto;
        delete updateProfileDto.jogosDisconnectIds;
        const data = Object.assign(Object.assign({}, updateProfileDto), { jogos: {
                connect: jogosIds === null || jogosIds === void 0 ? void 0 : jogosIds.map((id) => ({ id })),
                disconnect: jogosDisconnectIds === null || jogosDisconnectIds === void 0 ? void 0 : jogosDisconnectIds.map((id) => ({ id: id })),
            } });
        return await this.prisma.perfil.update({
            where: {
                id
            },
            data: data,
            include: {
                jogos: true,
                usuario: true
            }
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