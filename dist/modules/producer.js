#!/usr/bin/env node
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const connection_1 = __importStar(require("../config/stomp/connection"));
(0, connection_1.stompConnection)((frame) => {
    console.log("🚀 ~ file: producer.ts:8 ~ frame:", frame);
    console.log("Producer connected to Artemis");
    connection_1.default.subscribe("/queue/producer", (message) => {
        console.log("Producer received message: ", message.body);
    });
    connection_1.default.send("/queue/consumer", {}, "Hello from producer");
    connection_1.default.disconnect(() => {
        console.log("Producer disconnected from Artemis");
    });
}, (error) => {
    console.log("Producer failed to connect to Artemis", error);
});
