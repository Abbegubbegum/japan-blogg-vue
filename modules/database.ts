import mongo from "../server/mongo";
import { Module } from "@nuxt/types";

const databaseModule: Module = function () {
  this.nuxt.hook("render:setupMiddleware", async () => {
    await mongo.connect();
    console.log("Connected to Database!");
  });
};

export default databaseModule;
