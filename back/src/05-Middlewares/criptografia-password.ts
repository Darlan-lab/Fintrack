import * as argon2 from "argon2";

export class Criptografica {
    static async SenhaCriptografar (senha:string){

        const senhahash = await argon2.hash(senha , {
            type: argon2.argon2id,
            memoryCost: 65536,
            timeCost: 3,
            parallelism: 4
        })
    
    return senhahash
    }

    static async SenhaValidar (senha:string , senhahash: string) {

        const senhavalida = await argon2.verify(senhahash, senha)

        return senhavalida
    }
}