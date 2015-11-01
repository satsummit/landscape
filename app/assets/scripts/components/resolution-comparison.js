let React = require('react');
let MapComponent = require('./map');
let _ = require('lodash');

module.exports = React.createClass({

  displayName: 'ResolutionComparison',
  propTypes: {
    maps: React.PropTypes.array,
    token: React.PropTypes.string,
    center: React.PropTypes.array
  },

  getInitialState: function () {
    return {
      // So the default active radio box is the first.
      active: this.props.maps[0],
      selectedValue: 'apple'
    };
  },

  _handleChange: function (e) {
    let id = e.target.value.slice(6);
    this.setState({ active: _.find(this.props.maps, {id: id}) });
  },

  render: function () {

    let maxZoom = _.reduce(this.props.maps,
                           (a, b) => a.zoom > b.zoom ? a.zoom : b.zoom);

    let active = this.state.active;
    let options = {
      center: this.props.center,
      zoom: active.zoom,
      id: active.id,
      scrollWheelZoom: false,
      accessToken: active.accessToken,
      maxZoom: maxZoom
    };

    return (
      <div className='inherit-height'>

        <div className='inline-radio-selector'>
          {this.props.maps.map((map, i) =>
            <div className='inline-radio-item' key={'radio-selector-' + i}>
              <input type='radio'
                value={'radio-' + map.id}
                id={'radio-' + map.id}
                className='radio-item'
                checked={map.id === active.id}
                onChange={this._handleChange}
              />
              <label htmlFor={'radio-' + map.id}
                className='radio-item-label'>{map.displayAttrib2 ? map.displayAttrib1 + ' (' + map.displayAttrib2 + ')' : map.displayAttrib1}</label>
            </div>
          )}
        </div>

        <div className='map-container'>
          <div id='resolution-map' className='static-map'>
            <MapComponent
              options={options}
              id={'resolution-' + options.id}
              isStatic={true}
            />
          </div>
        </div>

      </div>

    );
  }
});
