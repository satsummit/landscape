/* global L */
'use strict'
import React from 'react'
import { render } from 'react-dom'
import _ from 'lodash'

// React.initializeTouchEvents(true)

import Map from './components/map'
import maps from './config/mapbox'

import CapabilityChart from './components/capability-chart'
import CapabilityTable from './components/capability-table'
import capabilities from '../data/capability.json'
import ResolutionComparison from './components/resolution-comparison'
import ToggledResolutionComparison from './components/toggled-resolution-comparison'

// Header Interactives
function openNav () {
  document.querySelector('.nav--trigger').addEventListener('click', function () {
    document.querySelector('.sidenav').style.width = '350px'
    document.querySelector('.container').style.marginRight = '350px'
  })
}

function closeNav () {
  document.querySelector('.closebtn').addEventListener('click', function () {
    document.querySelector('.sidenav').style.width = '0'
    document.querySelector('.container').style.marginRight = '0'
  })
}

_.each(capabilities, function (d) {
  d.platform = d.platform || ''
  d.company = d.company || ''
  d.name = d.company ? d.platform ? d.company + ' ' + d.platform : d.company : null
})

function createBannerMap () {
  let container = document.querySelector('#banner-map')
  let options = maps.banner
  options.accessToken = maps.token
  render(<Map options={options} id={'banner-' + options.id} isStatic={false}/>, container)
}

function createBannerMap2 () {
  let container = document.querySelector('#banner-map-2')
  let options = maps.secondBanner
  options.accessToken = maps.token
  render(<Map options={options} id={'secondBanner-' + options.id} isStatic={false}/>, container)
}

function createCapabilityChart () {
  let container = document.querySelector('#capabilities')
  render(<CapabilityChart data={capabilities} />, container)
}

function createCapabilityTable () {
  let container = document.querySelector('#capabilityTable')
  render(<CapabilityTable data={capabilities} />, container)
}

function createResolutionComparison () {
  let container = document.querySelector('#resolutionComparison')
  render(<ResolutionComparison title='Spatial Resolution' maps={maps.resolutionComparison.maps}
    token={maps.token} center={[-3.72596, -38.49375]}/>, container)
}

function createRevisitComparison () {
  let container = document.querySelector('#revisitComparison')
  render(<ResolutionComparison title='Temporal Resolution' maps={maps.revisitComparison.maps}
    token={maps.token} center={[49.8744, -112.9654]}/>, container)
}

function createToggledResolutionComparison () {
  let container = document.querySelector('#toggledResolutionComparison')
  render(<ToggledResolutionComparison imgTypes={maps.ugandaResolutionComparison.imgTypes}
    maps={maps.ugandaResolutionComparison.maps} token={maps.token}
    center={[0.5037, 33.2964]} title='Spectral Bands' messages={maps.ugandaResolutionComparison.messages}/>, container)
}

function createRoadsComparisonPalawan () {
  let container = document.querySelector('#palawan-roads-comparison')
  render(<ResolutionComparison title='Visible Road Networks by Resolution' maps={maps.palawanRoadsComparison.maps}
    token={maps.token} center={[10.14524, 119.2151]}/>, container)
}

function createAgricultureComparisonUganda () {
  let container = document.querySelector('#uganda-agriculture-comparison')
  render(<ToggledResolutionComparison imgTypes={maps.ugandaAgComparison.imgTypes}
    maps={maps.ugandaAgComparison.maps} token={maps.token}
    center={[0.5407, 33.3211]}/>, container)
}

function createLandslideModel () {
  var attribution = '<a style="font-weight:bold;" href="https://sites.google.com/a/umich.edu/nepalearthquake/landslide-maps">Landslide study by the University of Michigan</a> | Imagery &copy <a href="https://www.digitalglobe.com/">DigitalGlobe</a>, &copy <a href="https://www.mapbox.com/about/maps/">Mapbox</a>'
  createTransparencySlider(maps.token, 'landslide-model-map', 'landslide-model-range',
    'landslide-model-opacity', 'Landslide Model', 'stateofsatellite.n9ion355',
    'stateofsatellite.n9c6jfgk',
 [28.2899, 85.3308], 8, attribution)
}

function createComparisonSlider (token, frame, slider, map1, map2, view, zoom, attribution) {
  L.mapbox.accessToken = token
  var map = L.mapbox.map(frame, '', {
    dragging: false,
    touchZoom: false,
    scrollWheelZoom: false,
    doubleClickZoom: false,
    boxZoom: false,
    zoomControl: false
  })

  // Set custom attribution, if provided
  if (attribution) {
    map.attributionControl = false
    let attribControl = L.control.attribution()
    attribControl.setPrefix('')
    attribControl.addAttribution(attribution)
    attribControl.addTo(map)
  };

  L.mapbox.tileLayer(map1).addTo(map)
  var overlay = L.mapbox.tileLayer(map2).addTo(map)
  var range = document.getElementById(slider)

  function clip () {
    var nw = map.containerPointToLayerPoint([0, 0])
    var se = map.containerPointToLayerPoint(map.getSize())
    var clipX = nw.x + (se.x - nw.x) * range.value
    overlay.getContainer().style.clip = 'rect(' + [nw.y, clipX, se.y, nw.x].join('px,') + 'px)'
  }

  range['oninput' in range ? 'oninput' : 'onchange'] = clip
  map.on('move', clip)
  map.setView(view, zoom)
};

function createTransparencySlider (token, frame, slider, labelEl, label, map1, map2, view, zoom, attribution) {
  L.mapbox.accessToken = token
  var map = L.mapbox.map(frame, '', {
    dragging: false,
    touchZoom: false,
    scrollWheelZoom: false,
    doubleClickZoom: false,
    boxZoom: false,
    zoomControl: false
  })

  // Set custom attribution, if provided
  if (attribution) {
    map.attributionControl = false
    let attribControl = L.control.attribution()
    attribControl.setPrefix('')
    attribControl.addAttribution(attribution)
    attribControl.addTo(map)
  }

  L.mapbox.tileLayer(map1).addTo(map)
  var overlay = L.mapbox.tileLayer(map2).addTo(map)
  var range = document.getElementById(slider)
  var opacityLabel = document.getElementById(labelEl)

  function fade () {
    overlay.getContainer().style.opacity = range.value
    opacityLabel.innerHTML = label + ' Opacity: ' + (range.value * 100).toFixed(0) + '%'
  }

  range['oninput' in range ? 'oninput' : 'onchange'] = fade
  map.on('move', fade)
  map.setView(view, zoom)
}

openNav()
closeNav()

if (document.querySelector('#banner-map')) {
  createBannerMap()
}

if (document.querySelector('#banner-map-2')) {
  createBannerMap2()
}

if (document.querySelector('#capabilities')) {
  createCapabilityChart()
}

if (document.querySelector('#capabilityTable')) {
  createCapabilityTable()
}

if (document.querySelector('#resolutionComparison')) {
  createResolutionComparison()
}

if (document.querySelector('#revisitComparison')) {
  createRevisitComparison()
}

if (document.querySelector('#toggledResolutionComparison')) {
  createToggledResolutionComparison()
}

if (document.querySelector('#palawan-roads-comparison')) {
  createRoadsComparisonPalawan()
}

if (document.querySelector('#uganda-agriculture-comparison')) {
  createAgricultureComparisonUganda()
}

if (document.querySelector('#landslide-model-map')) {
  createLandslideModel()
}

if (document.querySelector('#comparisonSlider')) {
  createComparisonSlider()
}

// createBannerMap2()
// createCapabilityChart()
// createCapabilityTable()
// createResolutionComparison()
// createRevisitComparison()
// createToggledResolutionComparison()
// createAgricultureComparisonUganda()
// createLandslideModel()
// createComparisonSlider()

console.log('It is the time you have wasted for your rose that makes your rose so important.')
