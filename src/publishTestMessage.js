import mqtt from "mqtt";

const host = "test.mosquitto.org";
const port = "1883";
const connectUrl = `mqtt://${host}:${port}`;

// Replace with the same topic ID used in mqttConnection.js
const topicID = "9c95bbf1-de8c-4934-a2a0-8f1701391ab2";
const inputTopic = `BRE/calculateWinterSupplementInput/${topicID}`;

function publishTestMessage() {
  const client = mqtt.connect(connectUrl);

  client.on("connect", () => {
    console.log("Publisher connected to MQTT broker!");

    // Test input data
    const message = JSON.stringify({
      id: "12345",
      numberOfChildren: 2,
      familyComposition: "couple",
      familyUnitInPayForDecember: true,
    });

    client.publish(inputTopic, message, (err) => {
      if (err) {
        console.error("Failed to publish message:", err);
      } else {
        console.log(`Message published to ${inputTopic}: ${message}`);
      }
      client.end();
    });
  });

  client.on("error", (err) => {
    console.error(`MQTT connection error: ${err}`);
  });
}

publishTestMessage();
