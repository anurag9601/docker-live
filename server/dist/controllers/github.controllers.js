"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.githubCallbackController = githubCallbackController;
exports.githubWebhookController = githubWebhookController;
function githubCallbackController(req, res) {
    try {
        console.log("request all data of the callback", req);
        return res.status(200).json({ success: true, data: req });
    }
    catch (error) {
        console.log("error in /github/callback url", error);
        return res.status(500).json({ success: false, error: "Internal server error" });
    }
    ;
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
