import express from "express"
import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";

import cors from "cors";
import path from "path";


dotenv.config();


const app= express();
const PORT= process.env.PORT || 5001;



// middleware
app.use(
    cors({
    origin: "http://localhost:5173",
    
})
);
app.use(express.json()); // this middleware will parse JSON bodies: req.body

app.use(rateLimiter);

// our simple custom middleware
// app.use((req,res,next) => {
//     console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
//     next();
// });


app.use("/api/notes", notesRoutes);

connectDB().then(() => {
app.listen(PORT, () => {
    console.log("Server is running on port 5001", PORT)
});
});


// mongodb+srv://supratikdatta766:LBylV7IRzcJr0f4w@cluster0.guxymg3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0