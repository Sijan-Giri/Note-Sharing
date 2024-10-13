import express  from "express";
const app = express();

import noteRoute from "./note/noteRoute";
app.use(express.json())

app.use("",noteRoute)

export default app