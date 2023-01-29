import express from "express";
import morgan from "morgan";
import router from "./router";
import cors from "cors";
import { protect } from "./utils/auth";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * /api protected route
 */

//app.use('/api', protect, router)

// app.post('/user', createNewUser)
// app.post('/signin', signIn)

export default app;
