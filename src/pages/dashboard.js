import React, { Component } from 'react'
import { BrowserRouter as Router, IndexRoute,  Route, Link } from 'react-router-dom'
import SidePanel from './partials/side-panel/side-panel'


export default class Dashboard extends React.Component {
	render() {
		return (
				<main className="main-container grey darken-4">
					<SidePanel />

					<div className="map-container">
						<img id="active-map" src="https://cdn.worldvectorlogo.com/logos/dogecoin-1.svg" />
					</div>
				</main>
		)
	}
}
