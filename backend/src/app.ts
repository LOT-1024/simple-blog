import express from "express";
import cors from "cors";
import router from "./routes/routes";

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));

app.use('', router)

app.listen(3000, () => {
  console.log("http://localhost:3000/");
});
