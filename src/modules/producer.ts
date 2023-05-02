#!/usr/bin/env node

import "dotenv/config";
import client, { stompConnection } from "../config/stomp/connection";
import { sleep } from "./sleep";

type DestinationType = "MULTICAST" | "ANYCAST";

const destinationTypeArg = process.argv[2].toLocaleUpperCase() as DestinationType;

const routerType = destinationTypeArg === "MULTICAST" ? "topic" : "queue";

const address = process.argv[3] || "my-anycast-address";

const sendHeaders = {
  destination: `${routerType}/${address}`,
  "content-type": "text/plain",
  "destination-type": destinationTypeArg
};

const limiter = Number(process.argv[4] ?? 10);

let counter = 1;

stompConnection(async () => {
  
  while (counter <= limiter) {
    const message = `Message ${counter}`;
    client.send(sendHeaders.destination, sendHeaders, JSON.stringify(message));
    console.log(`${message} sent.`);
    counter++;
    await sleep(1000);
  }

  client.disconnect(() => {});
});
