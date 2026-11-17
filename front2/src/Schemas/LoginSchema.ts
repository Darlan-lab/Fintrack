import * as yup from "yup"

export const schemaLogin = yup
  .object({
    email: yup
      .string   ()
      .email    ("E-mail inválido")
      .required ("E-mail obrigatório"),
    senha: yup
      .string ()
      .required ("Senha obrigatória")
  });