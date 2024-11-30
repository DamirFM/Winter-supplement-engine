# Winter-supplement-engine

## Description:

<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" /><img src="https://img.shields.io/badge/Jest-000000?style=for-the-badge&logo=jest&logoColor=white" /><img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" /><img src="https://img.shields.io/badge/License-MIT-000000?style=for-the-badge&logo=opensource&logoColor=white" />

This project implements a rules engine to calculate eligibility and amounts for the Winter Supplement. It uses an MQTT broker for event-driven communication.

## Features

- Calculates winter supplement eligibility and amounts.
- MQTT integration for real-time data processing.
- Unit-tested with Jest for reliability.

## Setup

1. Clone the repository:
   git clone git@github.com:DamirFM/Winter-supplement-engine.git

2. Install dependencies:
   cd winter-supplement-engine
   npm install

3. Run the engine:
   npm start

4. Rules engine must work with an existing Winter Supplement Calculator designed
   using an event-driven architecture and be sure to note
   the MQTT topic ID each time you access the calculator, as this ID is essential for
   integrating the rule engine with the web application. https://winter-supplement-app-d690e5-tools.apps.silver.devops.gov.bc.ca

   Edit the topicID variable in src/mqttConnection.js:
   const topicID = "<your-dynamic-topic-id>";

   If Winter Supplement Calculator if does not response to test engine - run publishTestMessage.js simultaneously with mqttConnection.js:
   cd winter-supplement-engine
   node publishTestMessage.js
   node mqttConnection.js

5. To run unit tests:
   npm test

### Asclinema for workflow

[![asciicast](https://asciinema.org/a/692814.svg)](https://asciinema.org/a/692814)

## Reference

Node.js MQTT Project Preparation
https://www.emqx.com/en/blog/how-to-use-mqtt-in-nodejs
