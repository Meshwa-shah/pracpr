import { Router } from "express";
import { hello, name } from "../conrollers/hello.js";

const router = Router();

router.get('/hello', hello);
router.post('/name', name);

export default router;