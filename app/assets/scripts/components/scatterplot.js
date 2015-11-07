let React = require('react');
let d3 = require('d3');
let ReactTooltip = require('react-tooltip');
let _ = require('lodash');
let Axis = require('./axis');

var Scatterplot = React.createClass({

  displayName: 'Scatterplot',

  propTypes: {
    data: React.PropTypes.array,
    margins: React.PropTypes.object,
    xIndicator: React.PropTypes.string,
    yIndicator: React.PropTypes.string,
    xFormat: React.PropTypes.func,
    yFormat: React.PropTypes.func,
    width: React.PropTypes.number,
    height: React.PropTypes.number
  },

  getInitialState: function () {
    return {
      scales: { x: (x) => x, y: (x) => x},
      domains: { x: [0, 0], y: [0, 0] },
      points: []
    };
  },

  // Hardcoded based on size of icon we're using.
  icon: {width: 55, height: 25},

  componentWillReceiveProps: function (props) {
    if (props.width !== this.props.width ||
      props.height !== this.props.height ||
      props.xIndicator !== this.props.xIndicator ||
      props.yIndicator !== this.props.yIndicator) {
      this.setState(this._calcScales(_.extend({}, this.props, props)));
    }
  },

  _calcScales: function ({width, height, data, xIndicator, yIndicator, xFormat, yFormat}) {
    _.each(_.clone(data), function (d) {
      d.x = d[xIndicator] === null ? null : +d[xIndicator];
      d.y = d[yIndicator] === null ? null : +d[yIndicator];
    });

    let points = _.filter(data, (d) => d.x !== null && d.y !== null);

    if (!points.length) {
      return {width, height};
    }

    let domains = {
      x: d3.extent(_.pluck(points, 'x')),
      y: d3.extent(_.pluck(points, 'y'))
    };

    let scales = {
      x: d3.scale.linear()
        .domain(domains.x)
        .range([0, width]),

      y: d3.scale.linear()
        .domain([0, 20])
        .range([height, 0])
    };

    _.each(points, function (d, i) {
      d.left = scales.x(d.x);
      d.top = scales.y(d.y);

      d.xLabel = xFormat(d.x);
      d.yLabel = yFormat(d.y);

      d.place = width - d.left < 20 ? 'left' : 'right';
    });

    return {
      scales,
      domains,
      points
    };
  },

  getPosition: function (el) {
    return {
      width: el.clientX,
      height: el.clientY
    };
  },

  render: function () {

    let {
      points,
      scales,
      domains
    } = this.state;

    let {
      margins,
      height
    } = this.props;

    let ic = this.icon;

    // TODO: React does not currently support the image tag.
    // We get around this by using the dangerouslySetInnerHTML method,
    // but there is probably a better way.
    let image = `<image class="satellite-icon" width="${ic.width}" height="${ic.height}" x="${-ic.width * 0.4}" y="${-ic.height * 0.6}" xlink:href="assets/graphics/content/satellite-sprite.png" />`;

    return (
      <g>
        <g transform={`translate(${margins.left}, ${height + margins.top})`}>
          <Axis orientation='horizontal'
            scale={scales.x}
            domain={domains.x}
            format={a => a}
          />
        </g>

        <g transform={`translate(${margins.left}, ${margins.top})`}>
          <Axis orientation='vertical'
            scale={scales.y}
            domain={domains.y}
            format={a => a}
          />
        </g>

        <g className='scatter-points'
          transform={`translate(${margins.left}, ${margins.top})`}>

          {points.map((point, i) =>

            <g className='scatterplot-icon'
              data-tip={point.xLabel + ', ' + point.yLabel}
              data-place={point.place}
              data-type='info'
              transform={`translate(${point.left}, ${point.top})`}
              key={'scatterplot-marker-' + i}>

              <g dangerouslySetInnerHTML={{__html: image}} />

              <text
                className='scatterplot-label'
                x={ic.width * 0.4}
                dy='-1em'
                textAnchor='start'
              >{point['short']}</text>

            </g>
          )}
          <ReactTooltip />
        </g>
      </g>
    );
  }
});
module.exports = Scatterplot;
