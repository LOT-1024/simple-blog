import express from "express";
import cors from "cors";
import router from "./routes/routes";
import dotenv from 'dotenv'

dotenv.config()
const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));

app.use('', router)

app.listen(process.env.SERVER_PORT, () => {
  console.log(`http://localhost:/${process.env.SERVER_PORT}`);
});
