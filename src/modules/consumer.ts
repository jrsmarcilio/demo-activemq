#!/usr/bin/env node

import "dotenv/config";
import client, { stompConnection } from "../config/stomp/connection";

type DestinationType = "MULTICAST" | "ANYCAST";

const destinationTypeArg = process.argv[2].toLocaleUpperCase() as DestinationType;

const routerType = destinationTypeArg === "MULTICAST" ? "topic" : "queue";

const address = process.argv[3] || "my-address";

const destination = `${routerType}/${address}`;

stompConnection(() => {
  client.subscribe(destination, (message) =>
    console.log(message.body + " received"), {}
  );
});
