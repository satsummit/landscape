let React = require('react');
let classNames = require('classnames');
let _ = require('lodash');

var Axis = React.createClass({
  displayName: 'Axis',

  propTypes: {
    orientation: React.PropTypes.string,
    scale: React.PropTypes.func,
    domain: React.PropTypes.array,
    format: React.PropTypes.func
  },

  render: function () {
    let {
      orientation,
      scale,
      domain,
      format
    } = this.props;

    let [x1, x2] = _.map(domain, scale);

    let y1 = 0;
    let y2 = 0;

    if (orientation === 'vertical') {
      y1 = x1;
      y2 = x2;
      x1 = 0;
      x2 = 0;
    }

    if (!format) { format = scale; }

    if (isNaN(x1) || isNaN(x2) || isNaN(y1) || isNaN(y2) ||
        typeof scale.ticks !== 'function') {
      return <g></g>;
    }

    let ticks = scale.ticks(4);

    return (
      <g className={classNames('axis', orientation)}>

        <line x1={x1} x2={x2} y1={y1} y2={y2} className='axis' />

        {ticks.map((tick, i) =>
          <text className='axis tick' key={tick}
            x={orientation === 'vertical' ? -8 : scale(tick)}
            y={orientation === 'vertical' ? scale(tick) : 4}
            dy={orientation === 'vertical' ? 0 : '1em'}
            textAnchor={orientation === 'vertical' ? 'end' : 'middle'} >
            {format(tick)}
          </text>

        )}

      </g>
    );
  }
});

module.exports = Axis;
