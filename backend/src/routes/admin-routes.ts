import { Router } from "express";
import { registerUser } from "../controllers/admin-controller";

// import auth from "../middlewares/auth.middleware";

const adminRouter = Router();

// userRouter.get("/me", auth, getUser);
adminRouter.post("/", registerUser);

export default adminRouter;
