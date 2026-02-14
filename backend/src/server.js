import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express(); // main app
const PORT = process.env.PORT || 5001; // PORT for the server to listen on

//middleware
app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);
app.use(express.json()); // this middleware is used to get the bodies of json: req.body
app.use(rateLimiter);

// app.use((req, res, next) => {
//     console.log(`Req method is ${req.method} and Req URL is ${req.url}`);
//     next();
// });

app.use("/api/notes", notesRoutes); //telling the app use the notesRoutes to route the requests from "/api/notes"

// waitiing for the db connection to be established before starting the  main app
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("server started on port:", PORT);
  });
});
