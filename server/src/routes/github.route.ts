import Router from "express";
import { githubCallbackController, githubWebhookController } from "../controllers/github.controllers";

const githubRouters = Router();

githubRouters.post("/callback", githubCallbackController);
githubRouters.post("/webhook", githubWebhookController);

export default githubRouters;