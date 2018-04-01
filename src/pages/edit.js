import React, { Component } from 'react'
import { Link } from "react-router-dom"
import Dot from "./partials/edit/dot"
import Map from './partials/map/active-map'

let dotData = JSON.parse(localStorage.getItem("dots")) || []

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
		return (
		<Dot key={i}
				index={i}
				left={dot.x + 'px'}
				top={dot.y + 'px'}
				remove={this.removeDot}
				/>
		)
	}
	newDot(){
		let dots = this.state.dots
		dots.push({ x: 23, y: 45})
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
				let attr = children[li].attributes
				if (attr && attr.top && attr.left) {
					let x = parseInt(attr.top.nodeValue)
					let y = parseInt(attr.left.nodeValue)
					let dot = { coords: { x: x, y: y } }
					dotData.dots[li] = dot
				}
		}
		alert('saved')
		localStorage.setItem("dots", JSON.stringify(dotData));
	}

	render() {
		return (
			<main className="main-container white-text grey darken-4">
			<Map/>
			<div className="overlay-container">
				<h1>Edit</h1>
				<Link to={'/'}>back to dashboard</Link>
				<ul ref={this.dotContainer}>
					{this.state.dots.map(this.readDots)}
				</ul>
				<div className="controls grey darken-4">
					<button onClick={this.saveDots} className="btn">Save</button>
					<button onClick={this.newDot} className="btn">New unit</button>
					<button onClick={this.clearDots} className="btn">Clear all units</button>
				</div>
				</div>
			</main>
		)
	}
}
