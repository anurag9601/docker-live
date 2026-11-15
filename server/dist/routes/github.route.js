"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const github_controllers_1 = require("../controllers/github.controllers");
const githubRouters = (0, express_1.default)();
githubRouters.post("/callback", github_controllers_1.githubCallbackController);
githubRouters.post("/webhook", github_controllers_1.githubWebhookController);
exports.default = githubRouters;
