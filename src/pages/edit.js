import React, { Component } from 'react'
import { Link } from "react-router-dom"
import Dot from "./partials/edit/dot"
import Map from './partials/map/active-map'
import DotModal from "./partials/edit/dot-modal"

export default class Edit extends React.Component {
	constructor(){
		super()
		this.state = {
			dots: [],
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
	componentWillMount(){
		let dotData = JSON.parse(localStorage.getItem("units"))

		if (dotData !== null) {
			this.setState({dots: dotData.dots})
		}
	}
	componentDidUpdate(){
		localStorage.setItem("units",  JSON.stringify({dots:this.state.dots}))
	}

	toggleActiveUnit(e){

		let bool = true,
			  id = e.target.dataset.id

		if (e.target.nodeName === "UL") {
			id = -1
			bool = false
		}

		this.setState( {activeDotToggle: bool, activeDotIndex: id} )

	}
	removeDot(id){
		let dots = this.state.dots,
				i = this.state.activeDotIndex

		dots.map( (dot, i) => {
			if (id === dot.id) {
				dots.splice(i , 1)
			}
		})

		this.setState( prevState => ({
				editModalOpen: !prevState.editModalOpen,
				dots: dots,
				activeDotIndex: -1
		}));
	}

	readDots(dot, i){

		if (dot) {

		let x = dot.coords.x,
				y = dot.coords.y

		return (
			<Dot key={ i }
					 obj={ dot }
					 left={ x + 'px'}
					 top={ y + 'px'}
					 remove={this.removeDot}
					 save={this.saveDots}
					 toggleActive={this.toggleActiveUnit}
					 />
			)
		}
	}
	newDot(){
		console.log(this);
		let dots = this.state.dots,
				id = this.state.dots.length

		dots.push({
			id: id,
			name: ("Unit " + id) ,
			reservations: [],
			coords: { x: 0, y: 0}
		})

		this.setState({ dots: dots })
	}

	clearDots(){ this.setState({ dots: [] }) }

	saveDots(){

		let children = this.dotContainer.current.children,
		 		dots = this.state.dots

		for (let li in children) {
			if (children[li].attributes) {
				//
				// slice transform attribute from li
				//
				let attr = children[li].attributes,
				 		styleValue = attr.style.nodeValue,
				 		index = styleValue.lastIndexOf("transform"),
				 		transformValue = styleValue.slice(index, styleValue.lastIndexOf(")", index) )

				let translateValues = transformValue.slice(
																transformValue.indexOf('(') + 1,
																transformValue.indexOf(')')
															)

				let translateValuesArr = translateValues.split(",")

				let x = parseInt( translateValuesArr[0] ),
				 		y = parseInt( translateValuesArr[1] ),
						newCoords = { x: x, y: y }
						dots[li].coords = newCoords
			}
		}
		//
		// Apply dot names
		//
		dots.map((dot, i) => {
			if (dot.id === this.state.dots[i].id) {

				dot.name = this.state.dots[i].name
				dot.id = this.state.dots[i].id
				dot.reservations = []
			}
		})


		this.setState({ dots: dots })
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
					<Link to={'/'} className="btn btn-small btn-flat blue waves-effect waves-light"><i className="material-icons left">arrow_back</i>back</Link>
					<button onClick={this.newDot} className="btn waves-effect waves-light">
						<i className="material-icons left">add</i>New unit
					</button>
					<button onClick={this.toggleModal} className={editBtnClasses.join(' ')}>
						<i className="material-icons left">mode_edit</i>Edit unit
					</button>
					<button onClick={this.clearDots} className="btn red waves-effect waves-light right">
						<i className="material-icons left">delete_forever</i>Clear all
					</button>
				</div>
			</div>
		</main>
		)
	}
}
