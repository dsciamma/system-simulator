AirVantage System Simulator
======================

This application is a Node.js tool that sends system data into AirVantage using MQTT. The data appears in AirVantage as if the selected system had sent them (provided you have the right credentials).

Features
--------

The application is composed of a single screen. It displays a form to configure your MQTT message and send it to the server. The form is structured as follows:

#### Identification panel
* **Server**: Which AirVantage server you want to connect to: `eu.airvantage.net` (Europe) or `na.airvantage.net` (North America).
* **Identifier (IMEI, S/N)**: Identifier of the system you want to simulate. Depending on your system, it can be its Serial Number or IMEI.
* **Password**: MQTT password of your system. It must be the same as the one entered in AirVantage, by clicking on the padlock icon in the system's edit screen.

#### Message panel
* **Data path**: Path of a data or setting from one of the applications installed on your system. Check your Application Model in AirVantage for available paths.
* **Value**: Value to send for this specific data.
* **Type**: Type of the data. Must be consistent with the data type defined in your AirVantage Application Model.

#### Add data button
The `Add data` button dynamically adds a new data to the Message panel.

#### Send data button
The `Send data` button sends all the above data in a single MQTT communication.

Installing & running
--------------------

To run the application:

* Install Node.js from the [official website](http://www.nodejs.org/).
* Open a console in the `system-simulator` directory.
* Install the required modules by running `npm install`.
* Install the MQTT module by running `npm install mqtt`.
* Launch the application with Node.js by running `node app.js`.
* You should see the following traces:

    `Development Mode ON !`

    `Express server listening on port 3000`

* You can access the application at: `http://localhost:3000`
