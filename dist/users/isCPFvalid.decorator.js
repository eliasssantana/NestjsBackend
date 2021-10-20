"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsCpfValid = void 0;
const cpf_cnpj_validator_1 = require("cpf-cnpj-validator");
const class_validator_1 = require("class-validator");
function IsCpfValid() {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: "cpf",
            target: object.constructor,
            propertyName: propertyName,
            options: {
                message: "Cpf deve ser válido"
            },
            validator: {
                validate(value) {
                    return cpf_cnpj_validator_1.cpf.isValid(value);
                }
            }
        });
    };
}
exports.IsCpfValid = IsCpfValid;
//# sourceMappingURL=isCPFvalid.decorator.js.map