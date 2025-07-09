import express from "express";
import { router } from "./routes";
import cors from "cors";

const app = express();

const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use("/api/v1", router);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "server is running"
  }) 
})


app.listen(PORT, () => {
  console.log(`sever is running on port ${PORT}`);
})

