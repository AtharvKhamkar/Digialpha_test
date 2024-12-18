import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";
import { registrationSchema } from "../schema/user.schema.js";
import { isValid } from "zod";

const router = Router();
router.route("/register").post(registerUser);

export default router;
