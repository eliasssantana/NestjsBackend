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
exports.CreateProfileDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const create_game_dto_1 = require("../../game/dto/create-game.dto");
const profile_entity_1 = require("../entities/profile.entity");
class CreateProfileDto extends profile_entity_1.Profile {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)({
        message: "titulo precisa ser preenchido"
    }),
    (0, class_validator_1.IsString)({
        message: "titulo deve ser uma string"
    }),
    __metadata("design:type", String)
], CreateProfileDto.prototype, "titulo", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({
        message: "Você deve passar uma imagem"
    }),
    (0, class_validator_1.IsString)({
        message: "imagem deve ser a url da imagem"
    }),
    (0, class_validator_1.IsUrl)({
        require_protocol: true
    }),
    __metadata("design:type", String)
], CreateProfileDto.prototype, "imagem", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateProfileDto.prototype, "usuarioId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)({ each: true }),
    __metadata("design:type", Array)
], CreateProfileDto.prototype, "jogosIds", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => create_game_dto_1.CreateGameDto),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], CreateProfileDto.prototype, "jogos", void 0);
exports.CreateProfileDto = CreateProfileDto;
//# sourceMappingURL=create-profile.dto.js.map