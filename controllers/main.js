"use strict";

// Modules dependencies
// ---------------------------
var _ = require('underscore');
var async = require('async');
var mqtt = require('mqtt');


exports.index = function(req, resp, next) {
    // render the page
    resp.render('main');
};

exports.send = function(req, resp, next) {
    console.log(req.body);
    var server = req.body.server;
    var serialNumber = req.body.serialNumber;
    var password = req.body.password;
    var message = req.body.message;

    // Create a client connection
    var client = mqtt.createClient(1883, server, {
      username: serialNumber,
      password: password 
    });
    client.on('connect', function(packet) {
        client.publish(serialNumber + '/messages/json', JSON.stringify(message), function() {
            console.log("Message is published");
            client.end(); // Close the connection when published
            resp.status(200).send('{"sent":true}');
        });
    });
    client.on('error', function(packet) {
        resp.status(401).send('Bad MQTT Credentials');
    });
};
