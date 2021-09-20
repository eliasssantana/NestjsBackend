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
exports.CreateGenreDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const genre_entity_1 = require("../entities/genre.entity");
const create_game_dto_1 = require("../../game/dto/create-game.dto");
class CreateGenreDto extends genre_entity_1.Genre {
}
__decorate([
    (0, class_validator_1.IsString)({
        message: "'nome' deve ser uma string"
    }),
    __metadata("design:type", String)
], CreateGenreDto.prototype, "nome", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => create_game_dto_1.CreateGameDto),
    __metadata("design:type", Array)
], CreateGenreDto.prototype, "jogos", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { each: true }),
    __metadata("design:type", Array)
], CreateGenreDto.prototype, "jogosIds", void 0);
exports.CreateGenreDto = CreateGenreDto;
//# sourceMappingURL=create-genre.dto.js.map