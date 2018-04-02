import React, { Component } from 'react'
import { Link } from "react-router-dom"
import Dot from "./partials/edit/dot"
import Map from './partials/map/active-map'


let dotData = JSON.parse(localStorage.getItem("units")) || []

export default class Edit extends React.Component {
	constructor(){
		super()
		this.state = {
			dots: dotData.dots
		}
		this.readDots = this.readDots.bind(this)
		this.newDot = this.newDot.bind(this)
		this.clearDots = this.clearDots.bind(this)
		this.saveDots = this.saveDots.bind(this)
		this.removeDot = this.removeDot.bind(this)
		this.dotContainer = React.createRef()
	}
	removeDot(i){
		let dots = this.state.dots
		dots.splice(i, 1)
		this.setState({dots: dots})
	}
	readDots(dot, i){
		if (this) {

		let x = dot.coords.x
		let y = dot.coords.y

		return (
			<Dot key={i}
					 index={i}
					 left={ x + 'px'}
					 top={ y + 'px'}
					 remove={this.removeDot}
					 />
			)
		}
	}
	newDot(){
		let dots = this.state.dots
		dots.push({coords:{ x: 23, y: 45}})
		this.setState({dots: dots})
	}
	clearDots(){
		let dots = this.state.dots
		dots = []
		this.setState({dots: dots})
	}
	saveDots(){
		let children = this.dotContainer.current.children
		let dotData = {}
		dotData.dots = []
		for (let li in children) {
			if (children[li].attributes) {
				//
				//slice transform attribute from li
				//
				let attr = children[li].attributes
				let styleValue = attr.style.nodeValue

				let index = styleValue.lastIndexOf("transform")
				let transformValue = styleValue.slice(index, styleValue.lastIndexOf(")", index) )

				let translateValues = transformValue.slice(
					transformValue.indexOf('(') + 1,
					transformValue.indexOf(')')
				)

				let translateValuesArr = translateValues.split(",")

				let x = parseInt( translateValuesArr[0] )
				let y = parseInt( translateValuesArr[1] )

				let dot = { coords: { x: x, y: y } }

				dotData.dots[li] = dot
			}
		}
		alert('saved')
		localStorage.setItem("units", JSON.stringify(dotData));
	}

	render() {
		return (
			<main className="main-container white-text grey darken-4">
			<Map/>
			<div className="overlay-container">
				<h1>Edit</h1>

				<ul className="dot-container" ref={this.dotContainer}>

					{this.state.dots.map(this.readDots)}

				</ul>
				<div className="controls grey darken-4">

				<Link to={'/'}>back to dashboard</Link>
					<button onClick={this.saveDots} className="btn waves-effect waves-light">Save</button>
					<button onClick={this.newDot} className="btn waves-effect waves-light">New unit</button>
					<button onClick={this.clearDots} className="btn waves-effect waves-light">Clear all units</button>
				</div>
				</div>
			</main>
		)
	}
}
