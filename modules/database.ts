import mongoose from "mongoose";
import { Module } from "@nuxt/types";

const mongoURI = process.env.MONGODB_URI || "mongodb://localhost";

const databaseModule: Module = function () {
  this.nuxt.hook("render:setupMiddleware", async () => {
    await mongoose.connect(mongoURI);
    console.log("Connected to Database!");
  });
};

export default databaseModule;
