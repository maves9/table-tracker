import React, { Component } from 'react'
import { BrowserRouter as Router, IndexRoute,  Route, Link } from 'react-router-dom'
import SidePanel from './partials/side-panel/side-panel'
import Map from './partials/map/active-map'

let dotData = JSON.parse(localStorage.getItem("dots")) || []
let imageSrc = JSON.parse(localStorage.getItem("image")) || ""

export default class Dashboard extends React.Component {
	render() {
		return (
				<main className="main-container grey darken-4">
				<div className="overlay-container">
					<SidePanel />
				</div>
					<Map src={imageSrc}/>
				</main>
		)
	}
}
