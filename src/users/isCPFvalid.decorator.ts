import { cpf } from "cpf-cnpj-validator";
import { registerDecorator} from "class-validator";


export function IsCpfValid(){
    return function(object: Object, propertyName: string){
        registerDecorator({
            name: "cpf",
            target: object.constructor,
            propertyName: propertyName,
            options: {
                message: "Cpf deve ser válido"
            },
            validator:{
                validate(value:any){
                    return cpf.isValid(value)
                }
            }
        })
    }
}