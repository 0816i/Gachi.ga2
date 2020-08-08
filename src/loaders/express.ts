import path from "path";
import morgan from "morgan";
import express, { Application } from "express";

export default (app: express.Application) => {
  app.use(morgan("dev"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(express.static("./public"));
};
