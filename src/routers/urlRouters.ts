import express from "express";
import { createShortUrl } from "../controllers/urlController";
import { getOriginalUrl } from "../controllers/urlController";

const router = express.Router();

router.post("/shorten", createShortUrl);

router.get("/:shortCode", getOriginalUrl);

export default router;