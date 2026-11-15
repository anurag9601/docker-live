"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.githubAuthenticationController = githubAuthenticationController;
exports.githubCallbackController = githubCallbackController;
exports.githubWebhookController = githubWebhookController;
const connection_1 = __importDefault(require("../db/connection"));
const crypto_1 = require("crypto");
function githubAuthenticationController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const pool = yield (0, connection_1.default)();
            let state = (0, crypto_1.randomBytes)(32).toString("hex");
            const params = new URLSearchParams({
                client_id: process.env.GITHUB_CLIENT_ID,
                redirect_url: process.env.GITHUB_CALLBACK_URL,
                state: state,
            });
            // todo: have to implement function to handle multiple input in one go.
            // await pool?.request().input("ClientId", process.env.GITHUB_CLIENT_ID as string).input("Secret", process.env.GITHUB_SECRET).input("State", state).input("CallBackUrl", process.env.GITHUB_CALLBACK_URL).input("GithubAuthUrl", process.env.GITHUB_AUTHENTICATION_URL).execute("[DockerLive].[dbo].[GithubAuthenticationRequest_Create]");
            res.status(200).json({ url: `${process.env.GITHUB_AUTHENTICATION_URL}?${params}` });
        }
        catch (error) {
            console.log("error in /github/authentication url", error);
            return res.status(500).json({ success: false, error: "Internal server error" });
        }
    });
}
function githubCallbackController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield (0, connection_1.default)();
            console.log("request all data of the callback", req.body);
            return res.status(200).json({ success: true, data: req.body });
        }
        catch (error) {
            console.log("error in /github/callback url", error);
            return res.status(500).json({ success: false, error: "Internal server error" });
        }
        ;
    });
}
;
function githubWebhookController(req, res) {
    try {
        console.log("request all data of the webhook", req);
        return res.status(200).json({ success: true, data: req });
    }
    catch (error) {
        console.log("error in /github/webhook url", error);
        return res.status(500).json({ success: false, error: "Internal server error" });
    }
    ;
}
;
