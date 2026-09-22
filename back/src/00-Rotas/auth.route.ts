import express from "express"
import { Auth } from "../01-Controlers/auth.controler.js";

const route = express();

route.post("/login", Auth.validarUser);

export default route
