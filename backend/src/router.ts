import { Router } from "express";
import axios from "axios";
import { getConnections } from "./handlers/user";

const router = Router();

router.get("/connections", getConnections);

export default router;
