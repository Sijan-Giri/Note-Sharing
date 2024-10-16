import express  from "express";
import cors from "cors"
import noteRoute from "./note/noteRoute";

const app = express();

app.use(cors({
    origin : "*"
}))
app.use(express.json())

app.use("",noteRoute)

export default app