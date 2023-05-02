import "dotenv/config";
import Stomp from "stompjs";

let host = "localhost";
let port = 61613;
let login = "admin";
let passcode = "admin";

if (process.env.NODE_ENV === "production") {
  host = process.env.ARTEMIS_HOST as string;
  port = Number(process.env.ARTEMIS_PORT);
  login = process.env.ARTEMIS_USER as string;
  passcode = process.env.ARTEMIS_PASSWORD as string;
}

const client = Stomp.overTCP(host, port);

export type Callback = (frame?: Stomp.Frame) => any;

export const stompConnection = (callback: Callback) =>
  client.connect(
    {
      login,
      passcode,
      host,
      "heart-beat": "0,0",
    },
    callback,
    (error) => console.log(error)
  );

export default client;
