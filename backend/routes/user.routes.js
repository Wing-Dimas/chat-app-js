import express from "express";
import protectRoute from "../middleware/preotectRoute.js";
import { getUsersForSideBar } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", protectRoute, getUsersForSideBar);

export default router;
