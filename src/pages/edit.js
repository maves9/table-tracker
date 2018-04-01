import React, { Component } from 'react'
import { Link } from "react-router-dom"

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
		this.remove = this.saveDots.bind(this)
		this.dotContainer = React.createRef()
	}

	readDots(dot, i){
		return (
		<li key={i}
				index={i}
				className="dot"
				left={dot.x + 'px'}
				top={dot.y + 'px'}>
				<button className="btn red" onClick={this.removeDot}>Delete</button>
		</li>
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

		localStorage.setItem("dots", JSON.stringify(dotData));

	}

	render() {
		return (
			<main className="main-container white-text grey darken-4">
				<h1>Edit</h1>
				<Link to={'/'}>back to dashboard</Link>
				<ul ref={this.dotContainer}>
					{this.state.dots.map(this.readDots)}
				</ul>
				<button onClick={this.saveDots} className="btn">Save</button>
				<button onClick={this.newDot} className="btn">New unit</button>
				<button onClick={this.clearDots} className="btn">Clear all units</button>
			</main>
		)
	}
}
