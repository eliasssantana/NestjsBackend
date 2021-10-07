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
exports.CreateGameDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const game_entity_1 = require("../entities/game.entity");
const create_genre_dto_1 = require("../../genre/dto/create-genre.dto");
class CreateGameDto extends game_entity_1.Game {
}
__decorate([
    (0, class_validator_1.IsString)({
        message: "capa deve ser uma string"
    }),
    __metadata("design:type", String)
], CreateGameDto.prototype, "capa", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateGameDto.prototype, "titulo", void 0);
__decorate([
    (0, class_validator_1.IsString)({
        message: "descricao deve ser uma string"
    }),
    __metadata("design:type", String)
], CreateGameDto.prototype, "descricao", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, {
        message: "ano deve ser do tipo number"
    }),
    __metadata("design:type", Number)
], CreateGameDto.prototype, "ano", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, {
        message: "nota_imdb deve ser do tipo number"
    }),
    __metadata("design:type", Number)
], CreateGameDto.prototype, "nota_imdb", void 0);
__decorate([
    (0, class_validator_1.IsString)({
        message: "link_trailer deve ser uma string"
    }),
    __metadata("design:type", String)
], CreateGameDto.prototype, "link_trailer", void 0);
__decorate([
    (0, class_validator_1.IsString)({
        message: "link_gameplay deve ser uma string"
    }),
    __metadata("design:type", String)
], CreateGameDto.prototype, "link_gameplay", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => create_genre_dto_1.CreateGenreDto),
    __metadata("design:type", Array)
], CreateGameDto.prototype, "generos", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { each: true }),
    __metadata("design:type", Array)
], CreateGameDto.prototype, "generosIds", void 0);
exports.CreateGameDto = CreateGameDto;
//# sourceMappingURL=create-game.dto.js.map