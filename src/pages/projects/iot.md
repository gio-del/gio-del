---
priority: 3
layout: ../../layouts/ProjectLayout.astro
title: 'Internet of Things'
pubDate: 2023-01-13
description: 'IoT project and challenges for the course of "Internet of Things" @polimi'
github: 'https://github.com/gio-del/IOT-Project-Challenges'
tags: ["tinyOS","cooja","tossim","thingspeak","mqtt","coap"]
photo: '/assets/projects/iot.png'
---

#### Challenge 1

This challenge objective is to extract meaningful insights from MQTT and CoAP communication from a **Wireshark** capture file using Python and Wireshark filters.

#### Challenge 2

This challenge objective is to create a **Node-RED** flow for MQTT communication, including subscribing to a topic on a specific broker, filtering and extracting payload data, forwarding it to another MQTT topic on a different broker, visualizing the data on a graph, and exporting it to a CSV file.

#### Challenge 3

This challenge objective is to develop a **TinyOS** application that implements a routing protocol for a wireless sensor network and validate its functionality using **TOSSIM** simulation.

#### Project

The project focuses on the development of a **TinyOS** application that implements a publish-subscribe protocol for a wireless sensor network and validate its functionality using **Cooja**. The PAN Coordinator that acts as a broker sends the data to **Node-RED** via TCP/IP. Node-RED is used to filter and extract payload data, forward it to **ThingSpeak**, and visualize it on various graphs (Temperature, Humidity, Luminosity).
