import React, { Component } from 'react'
import { BrowserRouter as Router, IndexRoute,  Route, Link } from 'react-router-dom'
import SidePanel from './partials/side-panel/side-panel'
import Map from './partials/map/active-map'
import DotItem from "./partials/dashboard/dot-item"

let dotData = JSON.parse(localStorage.getItem("dots")) || []
let imageSrc = JSON.parse(localStorage.getItem("image")) || ""

export default class Dashboard extends React.Component {
	constructor(){
		super()
		this.state = {
			dots: dotData.dots
		}
		this.readDots = this.readDots.bind(this)
	}
	readDots( item, i ){

		if ( item ) {

			let x = item.coords.x
			let y = item.coords.y

			return (
			<DotItem key={i}
					 index={i}
					 left={ x + 'px'}
					 top={ y + 'px'}
					 remove={this.removeDot}
					 />
			)
		}
	}
	render() {
		return (
				<main className="main-container grey darken-4">
				<div className="overlay-container">
				<ul className="dot-container" ref={this.dotContainer}>
				{this.state.dots.map(this.readDots)}
				</ul>
					<SidePanel />
				</div>


				<Map src={imageSrc}/>
				</main>
		)
	}
}
