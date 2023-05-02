"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.stompConnection = void 0;
require("dotenv/config");
const stompjs_1 = __importDefault(require("stompjs"));
let host = "127.0.0.1";
let port = 61613;
let login = "admin";
let passcode = "admin";
if (process.env.NODE_ENV === "production") {
    host = process.env.ARTEMIS_HOST;
    port = Number(process.env.ARTEMIS_PORT);
    login = process.env.ARTEMIS_USER;
    passcode = process.env.ARTEMIS_PASSWORD;
}
const client = stompjs_1.default.overTCP(host, port);
const stompConnection = (connectCallback, errorCallback) => client.connect(login, passcode, connectCallback, errorCallback, host);
exports.stompConnection = stompConnection;
exports.default = client;
