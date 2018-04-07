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
		this.readDots         = this.readDots.bind(this)
		this.newDot           = this.newDot.bind(this)
		this.clearDots        = this.clearDots.bind(this)
		this.saveDots         = this.saveDots.bind(this)
		this.removeDot        = this.removeDot.bind(this)
		this.dotContainer     = React.createRef()
		this.toggleActiveUnit = this.toggleActiveUnit.bind(this)
		this.toggleModal      = this.toggleModal.bind(this)
	}
	componentDidUpdate(){
		this.saveDots()
		dotData = JSON.parse(localStorage.getItem("units"))
	}

	toggleActiveUnit(e){

		let bool = true
		let id = e.target.dataset.id

		if (e.target.nodeName === "UL") {
			id = -1
			bool = false
		}

		this.setState( {activeDotToggle: bool, activeDotIndex: id} )

	}
	removeDot(id){
		let dots = this.state.dots,
				i = this.state.activeDotIndex

		dots.map((dot, i)=>{
			if (id === dot.id) {
				dots.splice(i , 1)
			}
		})

		dotData.dots = dots

		this.setState( prevState => ({
				editModalOpen: !prevState.editModalOpen,
				dots: dotData.dots,
				activeDotIndex: -1
		}));
	}

	readDots(dot, i){

		if (dot) {

		let x = dot.coords.x
		let y = dot.coords.y

		return (
			<Dot key={ i }
					 obj={ dot }
					 left={ x + 'px'}
					 top={ y + 'px'}
					 remove={this.removeDot}
					 toggleActive={this.toggleActiveUnit}
					 />
			)
		}
	}
	newDot(){
		let dots = this.state.dots,
				id = 0

		if(this.state.dots !== undefined){
			id = this.state.dots.length
		}
		dots.push({
			id: id,
			name: "Unit " + ( id + 1 ),
			coords: { x: 45, y: 45}
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
		dotData.dots.map((dot, i) => {

				dot.name = this.state.dots[i].name
				dot.id = this.state.dots[i].id

		})

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

					{state.dots !== undefined ?
						state.dots.map(this.readDots) : null
					}

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
