import { Injectable } from "@nestjs/common";
import { cpf } from "cpf-cnpj-validator";
import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { UsersService } from "./users.service";

@Injectable()
@ValidatorConstraint()
export class IsCpfValidConstraint implements ValidatorConstraintInterface{
    constructor(private userService: UsersService){}
    async validate(cp: string, validationArguments?: ValidationArguments): Promise<boolean> {
        const response = await this.userService.findByCPF(cp)
        return !cpf.isValid(response.cpf)
    }
    
}
export function IsCpfValid(validationOptions?: ValidationOptions){
    return function(object: Object, propertyName: string){
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsCpfValidConstraint,
        })
    }
}