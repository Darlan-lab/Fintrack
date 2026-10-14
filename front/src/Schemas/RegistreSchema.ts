import * as yup from "yup"

export const RegisterSchema = yup.object({
    nome:   yup.string()
            .max(50, "Maximo de 50 caracteres")
            .required("O nome é obrigatorio"),

    cpf:     yup.string()
            .required("O cpf é obrigatorio")
            .test("cpf-valido", "CPF inválido", (cpf) => validarCPF(cpf ?? "")),

    email:   yup.string()
            .email("Deve ser preenchido com um email valido").required("O email é obrigatorio"),

    senha:  yup.string()
            .min(7 , 'A senha deve possuir no minimo 7 caracteres')
            .matches(/[A-Z]/, "A senha deve possuir uma letra maiúscula")
            .matches(/[a-z]/, "A senha deve possuir uma letra minúscula")
            .matches(/[0-9]/, "A senha deve possuir um número")
            .matches(/[^A-Za-z0-9]/, "A senha deve possuir um caractere especial")
            .required("A senha é obrigatoria"),

    repsenha: yup.string()
              .oneOf([yup.ref("senha")], "As senhas devem ser iguais")
              .required("A confirmacão da senha é obrigatoria"),
  }).required()


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