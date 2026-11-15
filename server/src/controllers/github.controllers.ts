import { Request, Response } from "express";
import dbConnection from "../db/connection";
import { exec } from "child_process";
import { randomBytes } from "crypto";

export async function githubAuthenticationController(req: Request, res: Response) {
    try {
        const pool = await dbConnection();

        let state = randomBytes(32).toString("hex");

        const params = new URLSearchParams({
            client_id: process.env.GITHUB_CLIENT_ID as string,
            redirect_url: process.env.GITHUB_CALLBACK_URL as string,
            state: state,
        });

        // todo: have to implement function to handle multiple input in one go.
        // await pool?.request().input("ClientId", process.env.GITHUB_CLIENT_ID as string).input("Secret", process.env.GITHUB_SECRET).input("State", state).input("CallBackUrl", process.env.GITHUB_CALLBACK_URL).input("GithubAuthUrl", process.env.GITHUB_AUTHENTICATION_URL).execute("[DockerLive].[dbo].[GithubAuthenticationRequest_Create]");

        res.status(200).json({ url: `${process.env.GITHUB_AUTHENTICATION_URL}?${params}` })
    } catch (error) {
        console.log("error in /github/authentication url", error);
        return res.status(500).json({ success: false, error: "Internal server error" });
    }
}

export async function githubCallbackController(req: Request, res: Response) {
    try {
        await dbConnection();
        console.log("request all data of the callback", req.body);
        return res.status(200).json({ success: true, data: req.body });
    } catch (error) {
        console.log("error in /github/callback url", error);
        return res.status(500).json({ success: false, error: "Internal server error" });
    };
};

export function githubWebhookController(req: Request, res: Response) {
    try {
        console.log("request all data of the webhook", req);
        return res.status(200).json({ success: true, data: req });
    } catch (error) {
        console.log("error in /github/webhook url", error);
        return res.status(500).json({ success: false, error: "Internal server error" });
    };
};