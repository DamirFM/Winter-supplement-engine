const mqtt = require("mqtt");

const host = "test.mosquitto.org";
const port = "1883";
const clientId = `mqtt_${Math.random().toString(16).slice(3)}`;

const connectUrl = `mqtt://${host}:${port}`;

const client = mqtt.connect(connectUrl, {
  clientId,
  clean: true,
  connectTimeout: 4000,

  reconnectPeriod: 1000,
});

const topic = "/nodejs/mqtt";

client.on("connect", () => {
  console.log("Connected");

  client.subscribe([topic], () => {
    console.log(`Subscribe to topic '${topic}'`);
    client.publish(
      topic,
      "nodejs mqtt test",
      { qos: 0, retain: false },
      (error) => {
        if (error) {
          console.error(error);
        }
      }
    );
  });
});
// Payload message
client.on("message", (topic, payload) => {
  console.log("Received Message:", topic, payload.toString());
});
// Error handling
client.on("error", (err) => {
  console.error("Connection Error:", err.message);
});
