import { ValidationArguments, ValidationOptions, ValidatorConstraintInterface } from "class-validator";
import { UsersService } from "./users.service";
export declare class IsCpfValidConstraint implements ValidatorConstraintInterface {
    private userService;
    constructor(userService: UsersService);
    validate(cp: string, validationArguments?: ValidationArguments): Promise<boolean>;
}
export declare function IsCpfValid(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
