import React from 'react'
import MapComponent from './map'
import _ from 'lodash'

module.exports = React.createClass({

  displayName: 'ToggledResolutionComparison',
  propTypes: {
    maps: React.PropTypes.array,
    imgTypes: React.PropTypes.array,
    token: React.PropTypes.string,
    center: React.PropTypes.array,
    messages: React.PropTypes.array
  },

  getInitialState: function () {
    return {
      active: this.props.maps[0],
      key: this.props.imgTypes[0].key
    }
  },

  _changeImg: function (evt) {
    let imgId = evt.target.value.slice(6)
    this.setState({ active: _.find(this.props.maps, {id: imgId}) })
  },

  _changeImgType: function (evt) {
    this.setState({ key: evt.target.value.slice(6) })
  },

  render: function () {
    var active = this.state.active[this.state.key]
    let options = {
      center: this.props.center,
      zoom: this.state.active.zoom,
      id: active,
      scrollWheelZoom: false,
      accessToken: this.state.active.accessToken
    }

    // Add messages from message/ message conditions array
    // Format: [{sensorCon: string, imgCon:string, msgStr: string}])
    var messageBox = ''
    var msgs = this.props.messages
    if (msgs) {
      for (var i = msgs.length - 1; i >= 0; i--) {
        let msg = msgs[i]
        if (this.state.active.id === msg.sensorCon && this.state.key === msg.imgCon) {
          messageBox = (<div className = 'image-comparison-message'
            dangerouslySetInnerHTML = {{__html: msg.msgStr}}></div>)
        };
      }
    }

    return (
      <div className='inherit-height'>
        <div className='inline-radio-selector'>
          {this.props.maps.map((map, i) =>
            <div className='inline-radio-item' key={'radio-selector-' + i}>
              <input type='radio'
                value={'radio-' + map.id}
                id={'radio-' + map.id}
                className='radio-item'
                checked={map.id === this.state.active.id}
                onChange={this._changeImg}
              />
              <label htmlFor={'radio-' + map.id}
                className='radio-item-label'>{map.displayAttrib2 ? map.displayAttrib1 + ' (' + map.displayAttrib2 + ')' : map.displayAttrib1}</label>
            </div>
          )}
        </div>

        {messageBox}

        <div className='inline-radio-selector-embedded resolution-map-selectors'>
          {this.props.imgTypes.map((imgType, i) =>
            <div className='inline-radio-item-embedded' key={'radio-selector-' + i}>
              <input type='radio'
                value={'radio-' + imgType.key}
                id={'radio-' + imgType.key}
                className='radio-item'
                checked={imgType.key === this.state.key}
                onChange={this._changeImgType}
              />
              <label htmlFor={'radio-' + imgType.key}
                className='radio-item-label'>{imgType.display}</label>
            </div>
          )}
        </div>

        <div className='map-container'>
          <div id='resolution-map' className='static-map'>
            <MapComponent
              options={options}
              id={'resolution-' + options.id}
            />
          </div>
        </div>

      </div>
    )
  }
})
