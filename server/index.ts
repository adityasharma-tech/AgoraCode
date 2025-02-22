import { config } from "dotenv"
import server from "./src/app";

config({
    path: "./.env",
    debug: true
})

const PORT = process.env.PORT || 5174;

server.listen(PORT, ()=>{
    console.log(`Server is running on port http://localhost:${PORT}`)
})