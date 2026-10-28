import express from "express"
import { Auth } from "../01-Controlers/auth.controler.js";
import { authMiddler } from "../05-Middlewares/autenticacao.js";

const route = express.Router();

route.post("/login", Auth.validarUser);
route.post("/autenticar", authMiddler, Auth.autenticarUser)

export default route
