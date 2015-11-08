let React = require('react');
let L = window.L;

module.exports = React.createClass({

  displayName: 'Map',
  propTypes: {
    id: React.PropTypes.string,
    options: React.PropTypes.object,
    isStatic: React.PropTypes.bool
  },

  map: null,

  componentDidMount: function () {
    let node = React.findDOMNode(this);
    let {
      options
    } = this.props;

    // Make sure to use the id property attached to options.
    // This is the mapbox id, not the DOM id, which is prefixed.
    let id = options.id;

    let token = options.accessToken;
    L.mapbox.accessToken = token;

    let layer = L.mapbox.tileLayer(id, {
      format: 'png'
    });
    options.tileLayer = layer;
    options.attributionControl = {compact: true};
    this.map = L.mapbox.map(node, id, options);
  },

  componentWillReceiveProps: function (props) {
    let map = this.map;

    map.eachLayer(function (l) {
      map.removeLayer(l);
    });
    if (map.tap) map.tap.disable();

    let id = props.options.id;
    let layer = L.mapbox.tileLayer(id, {
      format: 'png'
    });
    layer.addTo(this.map).bringToFront();
    if (props.options && props.options.zoom) {
      map.setZoom(props.options.zoom);
    }
  },

  render: function () {
    let {
      isStatic
    } = this.props;
    let className = isStatic ? 'static-map' : 'map';
    return <div className={className}></div>;
  }
});
