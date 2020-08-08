import createError from "http-errors";
import express, { Response, Request, NextFunction } from "express";
import { createServer } from "http";
import loaders from "./loaders";
import * as indexRouter from "./routes/index";

const app = express();

loaders.expressloader(app);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello!");
});

app.use((req: Request, res: Response, next: NextFunction) => {
  next(createError(404));
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(err.status || 500);
  if (err.status === 404) {
    return res.json({ message: "페이지를 찾을 수 없습니다." });
  }
  res.json({ message: "서버 에러" });
});

const server = createServer(app);
server.listen(3000, () => {
  console.log("Server Started");
});

loaders.listenIO(server);
