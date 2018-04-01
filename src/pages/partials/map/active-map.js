import React, { Component } from 'react'

let imageSrc = localStorage.getItem("activeMapSrc") || ""

export default class Map extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
      <div className="map-container">
        <img id="active-map" src={imageSrc} />
      </div>
		)
	}
}
