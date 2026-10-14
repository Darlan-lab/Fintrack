import * as yup from "yup"

export const LoginSchema = yup.object({
    email: yup.string()
                .email("Deve ser preenchido com um email valido")
                .required("O email é obrigatorio"),
    senha: yup.string()
                .min(7 , 'A senha deve possuir no minimo 7 caracteres')
                .matches(/[A-Z]/, "A senha deve possuir uma letra maiúscula")
                .matches(/[a-z]/, "A senha deve possuir uma letra minúscula")
                .matches(/[0-9]/, "A senha deve possuir um número")
                .matches(/[^A-Za-z0-9]/, "A senha deve possuir um caractere especial")
                .required("A senha é obrigatoria"),
    
})