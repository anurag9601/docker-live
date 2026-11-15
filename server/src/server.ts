import express from "express";
import dotEnv from "dotenv";
import cors from "cors";
import githubRouters from "./routes/github.route";

dotEnv.config();

const app = express();

app.use(cors({
    origin: ["http://localhost:5173", "https://github.com"],
    methods: ["all"],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/github", githubRouters);

app.listen(process.env.PORT, () => {
    console.log("Server is running on port:", process.env.PORT);
});