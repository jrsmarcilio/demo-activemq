import "dotenv/config";
import Stomp, { Frame } from "stompjs";
declare const client: Stomp.Client;
type ConnectCallback = (frame?: Frame) => any;
type ErrorCallback = (error: Frame | string) => any;
export declare const stompConnection: (connectCallback: ConnectCallback, errorCallback?: ErrorCallback) => any;
export default client;
