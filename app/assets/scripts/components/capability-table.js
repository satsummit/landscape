import React from 'react'
import _ from 'lodash'
import indicators from '../../data/capability-translation'

var CapabilitiesTable = React.createClass({

  displayName: 'CapabilitiesTable',

  propTypes: {
    data: React.PropTypes.array
  },

  getInitialState: function () {
    return {
      sort: 'name'
    }
  },

  _sort: function (e) {
    var sort = e.currentTarget.dataset.sort
    if (this.state.sort !== sort) {
      this.setState({
        sort: sort
      })
    }
  },

  render: function () {
    let data = this.props.data
    let sort = this.state.sort

    let headers = _.map(indicators, function (obj, key) {
      return {display: obj.display, sort: key}
    })
    headers.unshift({display: 'Satellite', sort: 'name'})

    let rows = _.chain(data)
      .sortBy(function (d) {
        return sort === 'name' || d[sort] === 'n/a' ? d[sort] : d[sort] * -1
      })
      .map(function (d) {
        return [d.name].concat(_.map(indicators, function (obj, key) {
          return d[key] === undefined || d[key] === null ? 'n/a' : d[key]
        }))
      })
      .value()

    return (
      <table>
        <thead>
          <tr>
            {headers.map((header, i) =>
              <th key={'capability-table-header-' + i}
                onClick={this._sort}
                data-sort={header.sort}>{header.display} &#9660;</th>
            )}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) =>
            <tr key={'capability-table-row-' + i}>
              {row.map((cell, i) =>
                <td key={'capability-table-cell-' + i}>{cell}</td>
              )}
            </tr>
          )}
        </tbody>
      </table>
    )
  }
})

module.exports = CapabilitiesTable
