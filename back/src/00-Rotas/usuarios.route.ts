import express from "express"
import { User } from "../01-Controlers/usuario.controler.js"

const route = express();

route.post("/", User.criarUser);
route.get("/", User.listarUsers);
route.get("/:id", User.buscarUser);
route.put("/:id", User.atualizarUser);
route.delete("/:id", User.deletarUser);

export default route

