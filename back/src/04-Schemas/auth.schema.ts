import { z } from "zod";

export class AuthZod {

    static authSchema = z.object({
        email: z.email('Email invalido'),
        senha: z.string()
                .min(7, 'A senha deve possuir no minimo 7 caracteres')
                .regex(/[A-Z]/,"A senha deve possuir uma letra maiúscula")
                .regex(/[a-z]/, "A senha deve possuir uma letra minúscula")
                .regex(/[0-9]/, "A senha deve possuir um número")
                .regex(/[^A-Za-z0-9]/, "A senha deve possuir um caractere especial")
    }).strict()
}

