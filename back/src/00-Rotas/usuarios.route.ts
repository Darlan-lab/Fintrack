import express from "express"
import { criarUser } from "../01-Controlers/usuario.controler.js"

const route = express()

route.post("/", criarUser)

route.get()

route.put()


export default route

