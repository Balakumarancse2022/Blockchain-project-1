import express from "express";
import auth from "../middleware/auth.middleware.js";
import role from "../middleware/role.middleware.js";
import {
  getAllPattaRequests,
  approvePatta,
  rejectPatta,
} from "../controllers/authority.controller.js";

const router = express.Router();

router.get(
  "/patta",
  auth,
  role("AUTHORITY"),
  getAllPattaRequests
);

router.put(
  "/patta/:id/approve",
  auth,
  role("AUTHORITY"),
  approvePatta
);

router.put(
  "/patta/:id/reject",
  auth,
  role("AUTHORITY"),
  rejectPatta
);

export default router;
