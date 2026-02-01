import express from "express";
import {
  submitPattaRequest,
  getMyLands
} from "../controllers/owner.controller.js";
import auth from "../middleware/auth.middleware.js";
import role from "../middleware/role.middleware.js";

const router = express.Router();

router.post(
  "/patta/request",
  auth,
  role("OWNER"),
  submitPattaRequest
);

router.get(
  "/lands",
  auth,
  role("OWNER"),
  getMyLands
);

export default router;
