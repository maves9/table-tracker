import React, { Component } from 'react'

export default class MapItem extends Component {

	constructor(props) {
		super(props)
	}

	render() {
		return (
			<li className="map-list-item">
      <div className="row">
        <div className="s12">
          <img className="map" src={this.props.src} />
        </div>
        <div className="s6">
          <button className="btn red" onClick={() => this.props.remove(this.props.index)}>Delete</button>
        </div>
        <div className="s6">
          <button className="btn" onClick={() => this.props.activate(this.props.index)}>Activate</button>
        </div>
        </div>
      </li>
		)
	}
}
