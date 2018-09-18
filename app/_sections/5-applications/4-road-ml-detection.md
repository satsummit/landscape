---
layout: default
scripts:
permalink: applications/road-ml-detection.html
title: "Road detection with ML"
parent: applications

prev: Disaster Reduction and Response
next: Tools

---

# Road Detection with ML

---

Disaster events tend to affect large areas, and can disrupt the normal functioning and organization of local authorities. Remote sensing information allows oversight of the situation after an event, and identification of areas that are most affected. Satellite image based coastline displacement and river bank erosion monitoring is an important instrument to measure vulnerability of urban areas to flooding, storm surges, and tsunamis. Knowledge of terrain elevation and cover type are used to predict the course of large floods, mudslides, and avalanches, and urban land use maps are used to estimate impervious surfaces to track and manage water runoff patterns and develop sewer systems. Satellite imagery also enables the identification and mapping of vulnerable informal settlements, that may otherwise remain unknown to disaster responders.

Daily imaging will make it possible to prepare for and track disasters as they occur, to "rewind" to immediately before a disaster, and to support the recovery process. Time is a critical factor for disaster response: Recent events such as the Nepal earthquake show the importance and usefulness of near-realtime satellite imagery. Access to images captured shortly after disaster events can be immensely helpful in assisting disaster response on the ground. Such images inform damage assessments and provide information on what infrastructure still exists for rescue efforts to reach affected areas. Better distribution approaches will be critical in allowing satellite data and analysis to get to responders as quickly as possible. When employed before disasters happen, satellite images provide a means to reduce vulnerabilities by identifying and preparing for different scenarios.

<div class="map-container">
  <div id="road-ml" class="static-map">
    <div class="road-ml-slider">
      <div class="range-labels">
        <label id="road-ml-opacity" class="range-label range-label-center"></label>
      </div>
      <input id="road-ml-range" class="range" type="range" min="0" max="1.0" step="any"/>
    </div>
    <div id="road-ml-map" class="static-map"></div>
  </div>
</div>
