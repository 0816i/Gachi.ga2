import express, { Request, Response } from "express";
import { wrap } from "../middlewares";
const router = express.Router();

router.get("/");
router.get("/list");
router.get("/detail/:id");
router.get("/apply");
router.get("/mypage");

router.put("/join/:id");

router.post("/apply");
router.post("/modify/:id");
router.post("/apply/:id");
router.post("/search");

router.delete("/delete/:id");
router.delete("/join/:id");

export default { router };
