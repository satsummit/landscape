'use strict';

let React = require('react');
React.initializeTouchEvents(true);

let _ = require('lodash');

let Map = require('./components/map');
let maps = require('./config/mapbox');

let CapabilityChart = require('./components/capability-chart');
let CapabilityTable = require('./components/capability-table');
let capabilities = require('../data/capability.json');
let ResolutionComparison = require('./components/resolution-comparison');
let ToggledResolutionComparison = require('./components/toggled-resolution-comparison')

// do a bit of data clean-up
_.each(capabilities, function(d) {
  d.platform = d.platform || '';
  d.company = d.company || '';
  d.name = d.company ?
    d.platform ? d.company + ' ' + d.platform :
    d.company : null;
});

let config = require('./config');
console.log.apply(console, config.consoleMessage);

(function createBannerMap () {
  let container = document.getElementById('banner-map');
  let options = maps.banner;
  options.accessToken = maps.token;
  React.render(<Map options={options} id={'banner-' + options.id} isStatic={false}/>, container);
})();

(function createBannerMap2 () {
  let container = document.getElementById('banner-map-2');
  let options = maps.secondBanner;
  options.accessToken = maps.token;
  React.render(<Map options={options} id={'secondBanner-' + options.id} isStatic={false}/>, container);
})();

(function createCapabilityChart () {
  let container = document.getElementById('capabilities');
  React.render(<CapabilityChart data={capabilities} />, container);
})();

(function createCapabilityTable () {
  let container = document.getElementById('capabilities-table');
  React.render(<CapabilityTable data={capabilities} />, container);
})();

(function createResolutionComparison () {
  let container = document.getElementById('resolution-comparison');
  React.render(<ResolutionComparison maps={maps.resolutionComparison.maps}
    token={maps.token} center={[-3.72596, -38.49375]}/>, container);
})();

(function createRevisitComparison () {
  let container = document.getElementById('revisit-comparison');
  React.render(<ResolutionComparison maps={maps.revisitComparison.maps}
    token={maps.token} center={[49.8744, -112.9654]}/>, container);
})();

(function createToggledResolutionComparison () {
  let container = document.getElementById('toggled-resolution-comparison');
  React.render(<ToggledResolutionComparison imgTypes={maps.ugandaResolutionComparison.imgTypes}
    maps={maps.ugandaResolutionComparison.maps} token={maps.token}
    center={[0.5037, 33.2964]} messages={maps.ugandaResolutionComparison.messages}/>, container);
})();

(function createRoadsComparisonPalawan () {
  let container = document.getElementById('palawan-roads-comparison');
  React.render(<ResolutionComparison maps={maps.palawanRoadsComparison.maps}
    token={maps.token} center={[10.14524, 119.2151]}/>, container);
})();

(function createAgricultureComparisonUganda () {
  let container = document.getElementById('uganda-agriculture-comparison');
  React.render(<ToggledResolutionComparison imgTypes={maps.ugandaAgComparison.imgTypes}
    maps={maps.ugandaAgComparison.maps} token={maps.token}
    center={[0.5407, 33.3211]}/>, container);
})();

(function createLandslideModel () {
  var attribution = '<a style="font-weight:bold;" href="https://sites.google.com/a/umich.edu/nepalearthquake/landslide-maps">Landslide study by the University of Michigan</a> | Imagery &copy <a href="https://www.digitalglobe.com/">DigitalGlobe</a>, &copy <a href="https://www.mapbox.com/about/maps/">Mapbox</a>'
  createTransparencySlider(maps.token, 'landslide-model-map', 'landslide-model-range',
    'landslide-model-opacity', 'Landslide Model', 'stateofsatellite.n9ion355',
    'stateofsatellite.n9c6jfgk',
 [28.2899, 85.3308], 8, attribution);
})();

function createComparisonSlider (token, frame, slider, map1, map2, view, zoom, attribution) {
  L.mapbox.accessToken = token;
  var map = L.mapbox.map(frame, '', {
    dragging: false,
    touchZoom: false,
    scrollWheelZoom: false,
    doubleClickZoom: false,
    boxZoom: false,
    zoomControl: false,
  });

  // Set custom attribution, if provided
  if (attribution) {
    map.attributionControl = false;
    let attribControl = L.control.attribution();
    attribControl.setPrefix('');
    attribControl.addAttribution(attribution);
    attribControl.addTo(map);
  };

  L.mapbox.tileLayer(map1).addTo(map);
  var overlay = L.mapbox.tileLayer(map2).addTo(map);
  var range = document.getElementById(slider);

  function clip () {
    var nw = map.containerPointToLayerPoint([0, 0]),
    se = map.containerPointToLayerPoint(map.getSize()),
    clipX = nw.x + (se.x - nw.x) * range.value;
    overlay.getContainer().style.clip = 'rect(' + [nw.y, clipX, se.y, nw.x].join('px,') + 'px)';
  };

  range['oninput' in range ? 'oninput' : 'onchange'] = clip;
  map.on('move', clip);
  map.setView(view, zoom);
};

function createTransparencySlider (token, frame, slider, labelEl, label, map1, map2, view, zoom, attribution) {
  L.mapbox.accessToken = token;
  var map = L.mapbox.map(frame, '', {
    dragging: false,
    touchZoom: false,
    scrollWheelZoom: false,
    doubleClickZoom: false,
    boxZoom: false,
    zoomControl: false,
  });

  // Set custom attribution, if provided
  if (attribution) {
    map.attributionControl = false;
    let attribControl = L.control.attribution();
    attribControl.setPrefix('');
    attribControl.addAttribution(attribution);
    attribControl.addTo(map);
  };

  L.mapbox.tileLayer(map1).addTo(map);
  var overlay = L.mapbox.tileLayer(map2).addTo(map);
  var range = document.getElementById(slider);
  var opacityLabel = document.getElementById(labelEl);

  function fade () {
    overlay.getContainer().style.opacity = range.value;
    opacityLabel.innerHTML = label + ' Opacity: ' +  (range.value * 100).toFixed(0) + '%';
  };

  range['oninput' in range ? 'oninput' : 'onchange'] = fade;
  map.on('move', fade);
  map.setView(view, zoom);
};

$(function() {
  var navContainer = $('.nav-container');
  var head = $('.hero-block')
  var nav = $('nav');
  var sections = $('section');
  var navBarLinks = $('nav a');
  var navHeaderLinks = $('.inline-nav a');
  sections.waypoint({
    handler: function(event, direction) {
      var activeSection;
      activeSection = $(this);
      if (direction == 'down' && activeSection[0].id == sections[0].id) {
        navContainer.css({'display':'inline'})
        head.stop().css('top',0).animate({'top':-head.outerHeight()});
        nav.stop().addClass('sticky').css('top',-nav.outerHeight()-30).animate({'top':0, 'opacity':1});
      };
      if (direction == 'up' && activeSection[0].id == sections[0].id) {
        head.stop().css('top',-head.outerHeight()).animate({'top':'0'});
        nav.stop().css('top',0).animate({'top':-nav.outerHeight()-30, 'opacity':0});
      };
      if (direction === 'up') activeSection = activeSection.prev();
      var active_link = $('nav a[href="#' + activeSection.attr('id') + '"]');
      navBarLinks.removeClass('selected');
      active_link.addClass('selected');
    },
    offset: '25%'
  })
  $.merge(navBarLinks, navHeaderLinks).click( function(event) {
    $.scrollTo(
      $(this).attr('href'),
      {
        duration: 200,
        offset: { 'left':0, 'top':-0.15*$(window).height() }
      }
    );
  });
});
