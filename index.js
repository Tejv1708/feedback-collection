import "dotenv/config.js";
import express from "express";
import mongoose from "mongoose";
import cookieSession from "cookie-session";
import passport from "passport";
import "./models/User.js";
import "./service/passport.js";
import { authRoutes } from "./routes/authroutes.js";

mongoose.connect(process.env.MONGOURI);

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIEKEY],
  })
);

app.use(passport.initialize());
app.use(passport.session());
authRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
