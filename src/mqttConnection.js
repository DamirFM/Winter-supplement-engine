import mqtt from "mqtt";
import engine from "./rulesEngine.js";

const host = "test.mosquitto.org";
const port = "1883";
const clientId = `9c95bbf1-de8c-4934-a2a0-8f1701391ab2`;

const connectUrl = `mqtt://${host}:${port}`;

const client = mqtt.connect(connectUrl, {
  clientId,
  clean: true,
  connectTimeout: 4000,
  reconnectPeriod: 1000,
});
// Send input data to the MQTT Topic:
const inputTopic = `BRE/calculateWinterSupplementInput/${clientId}`;
// Publish calculation
const outputTopic = `BRE/calculateWinterSupplementOutput/${clientId}`;
// const topic = "/nodejs/mqtt";

client.on("connect", () => {
  console.log("\x1b[1m\x1b[32m%s\x1b[0m", "Connected!");

  client.subscribe(inputTopic, () => {
    console.log(`Subscribed to '${inputTopic}' topic`);
  });
});
// Payload message
client.on("message", (topic, payload) => {
  console.log(
    "\x1b[36m%s\x1b[0m",
    "Received Message:",
    topic,
    payload.toString()
  );
  const inputTopicData = JSON.parse(payload.toString());
  const publishData = engine(inputTopicData);

  client.publish(outputTopic, JSON.stringify(publishData), (error) => {
    if (error) {
      console.error(
        "\x1b[31m%s\x1b[0m",
        `Failed to publish ${outputTopic}`,
        error
      );
    } else {
      console.log(
        "\x1b[35m%s\x1b[0m",
        "Published:",
        `${outputTopic}: ${JSON.stringify(publishData)}`
      );
    }
  });
});
// Error handling
client.on("error", (err) => {
  console.error("\x1b[31m%s\x1b[0m", "Connection Error:", err.message);
});
