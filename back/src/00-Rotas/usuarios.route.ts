import express from "express"
import { criarUser, listarUsers, buscarUser, atualizarUser, deletarUser} from "../01-Controlers/usuario.controler.js"

const route = express();

route.post("/", criarUser);
route.get("/", listarUsers);
route.get("/:id", buscarUser);
route.put("/:id", atualizarUser);
route.delete("/:id", deletarUser);

export default route

