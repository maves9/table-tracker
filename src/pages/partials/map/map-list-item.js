import React, { Component } from 'react'

export default class MapItem extends Component {

	constructor(props) {
		super(props)
	}

	render() {
		return (
			<li className="map-list-item">
        <img className="map" src={this.props.src} />
        <button className="btn red" onClick={() => this.props.remove(this.props.index)}>Delete</button>
        <button className="btn" onClick={() => this.props.activate(this.props.index)}>Activate</button>
			</li>
		)
	}
}
