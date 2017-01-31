import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'
import Dropdown from 'react-dropdown'
import Scatterplot from './scatterplot'
import indicators from '../../data/capability-translation-chart'

var Capabilities = React.createClass({

  displayName: 'Capabilities',

  propTypes: {
    data: React.PropTypes.array
  },

  getInitialState: function () {
    return {
      x: 'cost',
      y: 'resolution',
      width: 0,
      height: 0
    }
  },

  componentDidMount: function () {
    let self = this
    this.handleResize = _.debounce(function () {
      let node = ReactDOM.findDOMNode(self)
      self.setState({
        width: (node.offsetWidth + 100),
        height: node.offsetHeight
      })
    }, 100)
    window.addEventListener('resize', self.handleResize)
    this.handleResize()
  },

  componentWillUnmount: function () {
    window.removeEventListener('resize', this.handleResize)
  },

  _xAxisSelect: function (option) {
    this.setState({x: option.value})
  },

  _yAxisSelect: function (option) {
    console.log('setting state', option.value)
    this.setState({y: option.value})
  },

  render: function () {
    let {
      x,
      y,
      width,
      height
    } = this.state

    let options = _.map(Object.keys(indicators).filter((k) => k !== x && k !== y), function (k) {
      return {label: indicators[k].display, value: k}
    })
    let xOptions = [{value: x, label: indicators[x].display}].concat(options)
    let yOptions = [{value: y, label: indicators[y].display}].concat(options)

    let data = this.props.data

    let margins = {
      left: 220,
      right: 60,
      top: 80,
      bottom: 120
    }

    return (
      <div className='scatterplot'>

        <svg width={width + 'px'}
          height={height + 'px'}>

          <Scatterplot data={data}
            width={width - margins.left - margins.right}
            height={height - margins.top - margins.bottom}
            margins={margins}
            xIndicator={x}
            yIndicator={y}
            xFormat={indicators[x].fn}
            yFormat={indicators[y].fn}
          />
        </svg>

        <div className='scatterplot-axis-label x-label'>
          <Dropdown options={xOptions}
            onChange={this._xAxisSelect}
            value={xOptions[0]}
          />
        </div>

        <div className='scatterplot-axis-label y-label dropdown'>
          <Dropdown options={yOptions}
            onChange={this._yAxisSelect}
            value={yOptions[0]}
          />
        </div>

      </div>
    )
  }
})

module.exports = Capabilities
