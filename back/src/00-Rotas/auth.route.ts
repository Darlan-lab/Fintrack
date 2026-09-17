import express from "express"

const route = express();

route.post("/", User.criarUser);

export default route
