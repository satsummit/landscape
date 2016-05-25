module.exports = {
  token: 'pk.eyJ1Ijoic3RhdGVvZnNhdGVsbGl0ZSIsImEiOiJlZTM5ODI5NGYwZWM2MjRlZmEyNzEyMWRjZWJlY2FhZiJ9.omsA8QDSKggbxiJjumiA_w',

  banner: {
    id: 'stateofsatellite.mmkokm4g',
    center: [-3.7194, -38.5059],
    zoom: 15,
    scrollWheelZoom: false,
    keyboard: false,
    zoomControl: false
  },

  secondBanner: {
    id: 'stateofsatellite.n9behe7a',
    center: [0.5225, 33.3073],
    zoom: 14,
    scrollWheelZoom: false,
    keyboard: false,
    zoomControl: false
  },

  resolutionComparison: {
    maps: [{
      id: 'stateofsatellite.ql2i6bt9',
      displayAttrib1: 'Landsat',
      displayAttrib2: '15m',
      zoom: 14,
      accessToken: 'pk.eyJ1Ijoic3RhdGVvZnNhdGVsbGl0ZSIsImEiOiJlZTM5ODI5NGYwZWM2MjRlZmEyNzEyMWRjZWJlY2FhZiJ9.omsA8QDSKggbxiJjumiA_w'
    }, {
      id: 'stateofsatellite.8lhv1knt',
      displayAttrib1: 'Sentinel-2',
      displayAttrib2: '10m',
      zoom: 14,
      accessToken: 'pk.eyJ1Ijoic3RhdGVvZnNhdGVsbGl0ZSIsImEiOiJlZTM5ODI5NGYwZWM2MjRlZmEyNzEyMWRjZWJlY2FhZiJ9.omsA8QDSKggbxiJjumiA_w'
    }, {
      id: 'stateofsatellite.mm0pljb0',
      displayAttrib1: 'Blackbridge RapidEye',
      displayAttrib2: '5m',
      zoom: 15,
      accessToken: 'pk.eyJ1Ijoic3RhdGVvZnNhdGVsbGl0ZSIsImEiOiJlZTM5ODI5NGYwZWM2MjRlZmEyNzEyMWRjZWJlY2FhZiJ9.omsA8QDSKggbxiJjumiA_w'
    }, {
      id: 'stateofsatellite.8snvobt9',
      displayAttrib1: 'Airbus Pleiades',
      displayAttrib2: '0.5m',
      zoom: 18,
      accessToken: 'pk.eyJ1Ijoic3RhdGVvZnNhdGVsbGl0ZSIsImEiOiJlZTM5ODI5NGYwZWM2MjRlZmEyNzEyMWRjZWJlY2FhZiJ9.omsA8QDSKggbxiJjumiA_w'
    }, {
      id: 'stateofsatellite.mm0pp69n',
      displayAttrib1: 'DigitalGlobe WV3',
      displayAttrib2: '0.31m',
      zoom: 19,
      accessToken: 'pk.eyJ1Ijoic3RhdGVvZnNhdGVsbGl0ZSIsImEiOiJlZTM5ODI5NGYwZWM2MjRlZmEyNzEyMWRjZWJlY2FhZiJ9.omsA8QDSKggbxiJjumiA_w'
    }]
  },

  revisitComparison: {
    maps: [{
      id: 'stateofsatellite.njdap1fi',
      displayAttrib1: 'Growing JUN 15',
      displayAttrib2: '4.2m',
      zoom: 14,
      accessToken: 'pk.eyJ1Ijoic3RhdGVvZnNhdGVsbGl0ZSIsImEiOiJlZTM5ODI5NGYwZWM2MjRlZmEyNzEyMWRjZWJlY2FhZiJ9.omsA8QDSKggbxiJjumiA_w'
    }, {
      id: 'stateofsatellite.njdb4053',
      displayAttrib1: 'Harvest AUG 15',
      displayAttrib2: '2.7m',
      zoom: 14,
      accessToken: 'pk.eyJ1Ijoic3RhdGVvZnNhdGVsbGl0ZSIsImEiOiJlZTM5ODI5NGYwZWM2MjRlZmEyNzEyMWRjZWJlY2FhZiJ9.omsA8QDSKggbxiJjumiA_w'
    }, {
      id: 'stateofsatellite.njdb6g05',
      displayAttrib1: 'Post-harvest OCT 14',
      displayAttrib2: '4.2m',
      zoom: 14,
      accessToken: 'pk.eyJ1Ijoic3RhdGVvZnNhdGVsbGl0ZSIsImEiOiJlZTM5ODI5NGYwZWM2MjRlZmEyNzEyMWRjZWJlY2FhZiJ9.omsA8QDSKggbxiJjumiA_w'
    }]
  },

  ugandaResolutionComparison: {
    imgTypes: [{
      key: 'ugandaResFalsecolor',
      display: 'False Color'
    }, {
      key: 'ugandaResNdvi',
      display: 'NDVI'
    }, {
      key: 'ugandaResTruecolor',
      display: 'True Color'
    }],
    messages: [{
      sensorCon: 'ugandaResAirbus5',
      imgCon: 'ugandaResTruecolor',
      msgStr: 'The SPOT-5 satellite does not capture reflectance in the visible-blue wavelength region, making it impossible to generate a true color composite using its imagery.'
    }],
    maps: [{
      id: 'ugandaResAirbus6',
      ugandaResTruecolor: 'stateofsatellite.n9behe7a',
      ugandaResFalsecolor: 'stateofsatellite.n9bf6j5l',
      ugandaResNdvi: 'stateofsatellite.n9bepjed',
      displayAttrib1: 'SPOT 6, Mar 2015',
      displayAttrib2: '1.5m',
      zoom: 17,
      accessToken: 'pk.eyJ1Ijoic3RhdGVvZnNhdGVsbGl0ZSIsImEiOiJlZTM5ODI5NGYwZWM2MjRlZmEyNzEyMWRjZWJlY2FhZiJ9.omsA8QDSKggbxiJjumiA_w'
    }, {
      id: 'ugandaResAirbus5',
      ugandaResTruecolor: 'stateofsatellite.na0hk86f',
      ugandaResFalsecolor: 'stateofsatellite.n9be8l9l',
      ugandaResNdvi: 'stateofsatellite.n9bee6n6',
      displayAttrib1: 'SPOT 5, Dec 2007',
      displayAttrib2: '2.5m',
      zoom: 17,
      accessToken: 'pk.eyJ1Ijoic3RhdGVvZnNhdGVsbGl0ZSIsImEiOiJlZTM5ODI5NGYwZWM2MjRlZmEyNzEyMWRjZWJlY2FhZiJ9.omsA8QDSKggbxiJjumiA_w'
    }, {
      id: 'ugandaResBlackbridge',
      ugandaResTruecolor: 'stateofsatellite.n9bdifj5',
      ugandaResFalsecolor: 'stateofsatellite.n9be41l7',
      ugandaResNdvi: 'stateofsatellite.n9be0afe',
      displayAttrib1: 'RapidEye, Jan 2012',
      displayAttrib2: '5m',
      zoom: 17,
      accessToken: 'pk.eyJ1Ijoic3RhdGVvZnNhdGVsbGl0ZSIsImEiOiJlZTM5ODI5NGYwZWM2MjRlZmEyNzEyMWRjZWJlY2FhZiJ9.omsA8QDSKggbxiJjumiA_w'
    }]
  },

  palawanRoadsComparison: {
    maps: [{
      id: 'stateofsatellite.n9bbib3j',
      displayAttrib1: 'Footpaths',
      displayAttrib2: '0.5m',
      zoom: 19,
      accessToken: 'pk.eyJ1Ijoic3RhdGVvZnNhdGVsbGl0ZSIsImEiOiJlZTM5ODI5NGYwZWM2MjRlZmEyNzEyMWRjZWJlY2FhZiJ9.omsA8QDSKggbxiJjumiA_w'
    }, {
      id: 'stateofsatellite.n9bcn84n',
      displayAttrib1: 'Residential Roads',
      displayAttrib2: '1.5m',
      zoom: 19,
      accessToken: 'pk.eyJ1Ijoic3RhdGVvZnNhdGVsbGl0ZSIsImEiOiJlZTM5ODI5NGYwZWM2MjRlZmEyNzEyMWRjZWJlY2FhZiJ9.omsA8QDSKggbxiJjumiA_w'
    }, {
      id: 'stateofsatellite.n9bd59bm',
      displayAttrib1: 'Secondary Roads',
      displayAttrib2: '2.5m',
      zoom: 19,
      accessToken: 'pk.eyJ1Ijoic3RhdGVvZnNhdGVsbGl0ZSIsImEiOiJlZTM5ODI5NGYwZWM2MjRlZmEyNzEyMWRjZWJlY2FhZiJ9.omsA8QDSKggbxiJjumiA_w'
    }, {
      id: 'stateofsatellite.n9bdabh7',
      displayAttrib1: 'Primary Roads',
      displayAttrib2: '5m',
      zoom: 19,
      accessToken: 'pk.eyJ1Ijoic3RhdGVvZnNhdGVsbGl0ZSIsImEiOiJlZTM5ODI5NGYwZWM2MjRlZmEyNzEyMWRjZWJlY2FhZiJ9.omsA8QDSKggbxiJjumiA_w'
    }]
  },

  ugandaAgComparison: {
    imgTypes: [{
      key: 'ugandaAgNdvi',
      display: 'NDVI'
    }, {
      key: 'ugandaAgTruecolor',
      display: 'True Color'
    }],
    maps: [{
      id: 'ugandaAgJan',
      ugandaAgTruecolor: 'stateofsatellite.n9i188po',
      ugandaAgNdvi: 'stateofsatellite.n9i1dj49',
      displayAttrib1: 'Jan Signature (SPOT 6)',
      zoom: 15,
      accessToken: 'pk.eyJ1Ijoic3RhdGVvZnNhdGVsbGl0ZSIsImEiOiJlZTM5ODI5NGYwZWM2MjRlZmEyNzEyMWRjZWJlY2FhZiJ9.omsA8QDSKggbxiJjumiA_w'
    }, {
      id: 'ugandaAgMarch',
      ugandaAgTruecolor: 'stateofsatellite.n9i0k87l',
      ugandaAgNdvi: 'stateofsatellite.n9i14027',
      displayAttrib1: 'Mar Signature (RapidEye)',
      zoom: 15,
      accessToken: 'pk.eyJ1Ijoic3RhdGVvZnNhdGVsbGl0ZSIsImEiOiJlZTM5ODI5NGYwZWM2MjRlZmEyNzEyMWRjZWJlY2FhZiJ9.omsA8QDSKggbxiJjumiA_w'
    }]
  },

  nepalLandslideModel: {
    maps: [{
      id: 'stateofsatellite.n9c6jfgk',
      displayAttrib1: 'Landslide Model',
      zoom: 8,
      accessToken: 'pk.eyJ1Ijoic3RhdGVvZnNhdGVsbGl0ZSIsImEiOiJlZTM5ODI5NGYwZWM2MjRlZmEyNzEyMWRjZWJlY2FhZiJ9.omsA8QDSKggbxiJjumiA_w'
    }, {
      id: 'stateofsatellite.n9ion355',
      displayAttrib1: 'Basemap',
      zoom: 8,
      accessToken: 'pk.eyJ1Ijoic3RhdGVvZnNhdGVsbGl0ZSIsImEiOiJlZTM5ODI5NGYwZWM2MjRlZmEyNzEyMWRjZWJlY2FhZiJ9.omsA8QDSKggbxiJjumiA_w'
    }]
  }

};
