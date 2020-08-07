import express, { Request, Response } from "express";

const router = express.Router();

router.get("/");
router.get("/list");
router.get("/detail/:id");
