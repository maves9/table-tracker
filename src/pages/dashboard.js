import React, { Component } from 'react'
import { BrowserRouter as Router, IndexRoute,  Route, Link } from 'react-router-dom'
import SidePanel from './partials/dashboard/side-panel/side-panel'
import Map from './partials/map/active-map'
import DotUnit from "./partials/dashboard/dot-unit-item"

import M from "../libs/materialize-src/js/bin/materialize.min"

export default class Dashboard extends React.Component {
	constructor(){
		super()

		this.state = {
			units: [],
			imageSrc: "",
			activeDot: -1
		}
		this.setDotActive = this.setDotActive.bind(this)
		this.readDots = this.readDots.bind(this)
	}

	componentWillMount(){

		let units = JSON.parse(localStorage.getItem("units")),
				mapSrc = localStorage.getItem("activeMapSrc")

		if (units !== null) {
			this.setState({ units: units })
		}
		if (mapSrc !== null) {
			this.setState({ activeMapSrc: mapSrc })
		}
	}
	readDots( item, id ){

		if ( item ) {

			let x = item.coords.x,
					y = item.coords.y

			return (
			<DotUnit
					key={ id }
					id={ item.id }
					activeDotId={ this.state.activeDot }
					left={ x + 'px'}
					top={ y + 'px'}
					/>
			)
		}
	}
	setDotActive(e){
		let id = -1
		if ("id" in e.target.dataset) {
			id = parseInt(e.target.dataset.id)
		}
		this.setState({ activeDot: id })
	}
	render() {

		const units = this.state.units.dots,
					imageSrc = this.state.imageSrc

		return (
			<main className="main-container grey darken-4">
				<div className="overlay-container">
					<ul className="dot-container" onClick={this.setDotActive} ref={this.dotContainer}>
						{units.map(this.readDots)}
					</ul>
					<SidePanel activeDotId={this.state.activeDot} unitsObj={this.state.units.dots}/>
				</div>
				<Map src={imageSrc}/>
			</main>
		)
	}
}
