import express from "express";


const app = express();

const PORT = 3000;


app.use(express.json());



app.get("/", (req, res) => {
  res.status(200).json({
    message: "server is running"
  }) 
})


app.listen(PORT, () => {
  console.log(`sever is running on port ${PORT}`);
})

