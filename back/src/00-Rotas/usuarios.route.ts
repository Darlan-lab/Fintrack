import express from "express"
import { User } from "../01-Controlers/usuario.controler.js"
import { authMiddler } from "../05-Middlewares/autenticacao.js";

const route = express.Router();

route.post("/", User.criarUser);
route.get("/", authMiddler ,User.listarUsers);
route.get("/:id", User.buscarUser);
route.put("/:id", User.atualizarUser);
route.delete("/:id", User.deletarUser);

export default route

