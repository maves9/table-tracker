import React, { Component } from 'react'
import { BrowserRouter as Router, IndexRoute,  Route, Link } from 'react-router-dom'
import SidePanel from './partials/side-panel/side-panel'
import Map from './partials/map/active-map'
import DotUnit from "./partials/dashboard/dot-unit-item"

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

		if (localStorage.getItem("units")) {
			this.state.units = JSON.parse(localStorage.getItem("units"))
		}

		if (localStorage.getItem("activeMapSrc")) {
			this.state.imageSrc = localStorage.getItem("activeMapSrc")
		}
console.log(this);
	}
	readDots( item, i ){

		if ( item ) {

			let x = item.coords.x
			let y = item.coords.y

			return (
			<DotUnit key={ i }
					 index={ i }
					 left={ x + 'px'}
					 top={ y + 'px'}
					 setDotActive={ this.setDotActive }
					 />
			)
		}
	}
	setDotActive(e){
		this.setState({ activeDot: e.target.dataset.i })
	}
	render() {
		const units = this.state.units.dots || []
		const imageSrc = this.state.imageSrc || ""
		return (
			<main className="main-container grey darken-4">
				<div className="overlay-container">
					<ul className="dot-container" ref={this.dotContainer}>
						{units.map(this.readDots)}
					</ul>
					<SidePanel />
				</div>
				<Map src={imageSrc}/>
			</main>
		)
	}
}
