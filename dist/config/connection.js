"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const stompjs_1 = __importDefault(require("stompjs"));
let host = '127.0.0.1';
let port = 61613;
if (process.env.NODE_ENV === "production") {
    host = process.env.ARTEMIS_HOST;
    port = Number(process.env.ARTEMIS_PORT);
}
const client = stompjs_1.default.overTCP(host, port);
exports.default = client;
