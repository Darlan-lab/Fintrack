import { z } from "zod";


/*=================================
    Schema Usuario.body (Cadastro)
===================================*/

export const userSchema = z.object({
    nome:   z.string()
            .min(3, 'O nome deve ter mais do que 3 caracteres')
            .max(50, 'O nome deve ter menos do que 50 caracteres'),

    cpf:    z.string()
            .length(11, 'O CPF deve possuir 11 caracteres')
            .refine( (cpf) => validarCPF(cpf), 'CPF invalido'),

    email:  z.email('Email Invalido')
})

export const userSchemaPut = userSchema.partial()
export type UsuarioPut = z.infer<typeof userSchemaPut>;

/*=====================
    Schema Usuario.body
======================*/

export const userConsultaSchema = z.object({
    id:     z.coerce
            .number()
            .int()
            .positive()
            .optional(),

    nome:   z.string()
            .optional(),

    cpf:    z.string()
            .length(11)
            .optional(),

    email:  z.email()
            .optional(),

    ativo:  z.coerce
            .boolean()
            .optional()
}).strict()
export type UsuarioQuery = z.infer<typeof userConsultaSchema>;

export const userConsultaIdSchema = z.object({
    id:     z.coerce.number('O Id deve ser um numero')
            .int('O Id deve ser um numero Inteiro')
            .positive('O Id deve ser um numero positivo')
}).strict()



/*=====================
    FUNCOES DE REFINE 
======================*/

function validarCPF(cpf: string): boolean {
    cpf = cpf.replace(/\D/g, "");

    if (cpf.length !== 11) {
        return false;
    }

    if (/^(\d)\1{10}$/.test(cpf)) {
        return false;
    }

    let soma = 0;

    for (let i = 0; i < 9; i++) {
        soma += Number(cpf[i]) * (10 - i);
    }

    let resto = (soma * 10) % 11;

    if (resto === 10) {
        resto = 0;
    }

    if (resto !== Number(cpf[9])) {
        return false;
    }

    soma = 0;

    for (let i = 0; i < 10; i++) {
        soma += Number(cpf[i]) * (11 - i);
    }

    resto = (soma * 10) % 11;

    if (resto === 10) {
        resto = 0;
    }

    return resto === Number(cpf[10]);
}