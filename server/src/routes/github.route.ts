import Router from "express";
import { githubAuthenticationController, githubCallbackController, githubWebhookController } from "../controllers/github.controllers";

const githubRouters = Router();

githubRouters.get("/authentication", githubAuthenticationController)
githubRouters.get("/callback", githubCallbackController);
githubRouters.post("/webhook", githubWebhookController);

export default githubRouters;