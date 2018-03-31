import React, { Component } from 'react'
import Link from "react-router";

export default class Footer extends Component {

	render() {
		return (
      <div className="footer card-panel blue-grey darken-4">
        <button className="btn light-blue darken-2">Edit Map</button>
				<Link to="/edit" className="light-blue-text text-darken-2">Edit Map</Link>
			</div>
		)
	}
}
