import dotenv from "dotenv";
dotenv.config({path:'./.env'})

const PORT = process.env.PORT || 5000;
const URL = process.env.MONGODB_URL 

export default {PORT, URL}