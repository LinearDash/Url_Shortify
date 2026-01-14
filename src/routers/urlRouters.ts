import express from "express";
import { createShortUrl, getAllUrls, getUrlDetails } from "../controllers/urlController";

const router = express.Router();

router.post("/shorten", createShortUrl);

router.get("/:shortCode", getUrlDetails);

router.get('/',getAllUrls);

export default router;