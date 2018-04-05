import React, { Component } from 'react'
import { Link } from "react-router-dom"
import Dot from "./partials/edit/dot"
import Map from './partials/map/active-map'
import DotModal from "./partials/edit/dot-modal"

let dotData = JSON.parse(localStorage.getItem("units")) || []

export default class Edit extends React.Component {
	constructor(){
		super()
		this.state = {
			dots: dotData.dots,
			activeDotToggle: false,
			activeDotIndex: -1,
			editModalOpen: false
		}
		this.readDots = this.readDots.bind(this)
		this.newDot = this.newDot.bind(this)
		this.clearDots = this.clearDots.bind(this)
		this.saveDots = this.saveDots.bind(this)
		this.removeDot = this.removeDot.bind(this)
		this.dotContainer = React.createRef()
		this.toggleActiveUnit = this.toggleActiveUnit.bind(this)
		this.toggleModal = this.toggleModal.bind(this)
	}
	componentDidUpdate(){
		this.saveDots()
		dotData = JSON.parse(localStorage.getItem("units"))
	}

	toggleActiveUnit(e){

		let bool = true
		let i = e.target.dataset.i

		if (e.target.nodeName === "UL") {
			i = -1
			bool = false
		}

		this.setState( {activeDotToggle: bool, activeDotIndex: i} )

	}
	removeDot(){
		let dots = this.state.dots,
				i = this.state.activeDotIndex

		dots.splice(i, 1)
		dotData.dots = dots

		this.setState( prevState => ({
				editModalOpen: !prevState.editModalOpen,
				dots: dotData.dots
		}));
	}
	
	readDots(dot, i){

		if (this) {

		let x = dot.coords.x
		let y = dot.coords.y

		return (
			<Dot key={ i }
					 index={ i }
					 left={ x + 'px'}
					 top={ y + 'px'}
					 remove={this.removeDot}
					 toggleActive={this.toggleActiveUnit}
					 />
			)
		}
	}
	newDot(){
		let dots = this.state.dots
		dots.push({
			name: "Unit " + this.state.dots.length,
			coords:{ x: 45, y: 45}
		})
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
				// slice transform attribute from li
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

		//
		// Apply dot names
		//

		for (let obj in dotData.dots) {

			if (obj.hasOwnProperty("name")) {

				obj.name = this.state.dots[obj].name

			}
		}

		localStorage.setItem("units", JSON.stringify(dotData));
	}

	toggleModal(e, dot){
		this.setState(prevState => ({
	      editModalOpen: !prevState.editModalOpen
	  }));
		if(dot) {

			let dots = this.state.dots

			dots[this.state.activeDotIndex] = dot

			this.setState({dots: dots})

		}
	}

	render() {

		let editBtnClasses = ["btn"],
				state = this.state,
				dots = state.dots,
				index = state.activeDotIndex

		if (!state.activeDotToggle) {
			editBtnClasses.push("hide")
		}

		return (
			<main className="main-container white-text grey darken-4">
			{state.editModalOpen ?
				<DotModal obj={dots[index]} index={index} toggleModal={this.toggleModal} removeDot={this.removeDot}/>
				:null
			}
			<Map/>
			<div className="overlay-container">

				<ul className="dot-container" onClick={this.toggleActiveUnit} ref={this.dotContainer}>

					{this.state.dots.map(this.readDots)}

				</ul>
				<div className="controls blue-grey darken-4">
					<Link to={'/'} className="btn btn-small cyan waves-effect waves-light">back to dashboard</Link>
					<button onClick={this.newDot} className="btn waves-effect waves-light">New unit</button>
					<button onClick={this.toggleModal} className={editBtnClasses.join(' ')}>Edit unit</button>
					<button onClick={this.clearDots} className="btn red waves-effect waves-light right">Clear all units</button>
				</div>
				</div>
			</main>
		)
	}
}
