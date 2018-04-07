import React, { Component } from 'react'
import { Link } from "react-router-dom"
import MapItem from "./partials/map/map-list-item"

export default class Maps extends React.Component {
	constructor(){
		super()
		this.state = {
			mapList: [],
			activeMapSrc: ""
		}
		this.readMaps = this.readMaps.bind(this)
		this.saveMaps = this.saveMaps.bind(this)

		this.getMap = this.getMap.bind(this)
		this.removeMap = this.removeMap.bind(this)
		this.activate = this.activate.bind(this)
		this.textInput = React.createRef()
		this.mapListContainer = React.createRef()
	}
	componentWillMount(){
		let src = localStorage.getItem("image"),
				list = JSON.parse(localStorage.getItem("mapList"))

		if (src !== null) {
			this.setState({activeMapSrc: src })
		}
		if (list !== null) {
			this.setState({mapList: list })
		}
	}
	componentDidUpdate(){
		this.saveMaps()
	}

	getMap(){
		let mapList = this.state.mapList
		let url = this.textInput.current.value
		mapList.push({ src: url})
		this.setState({mapList: mapList})
	}
	removeMap(i){
		let mapList = this.state.mapList
		mapList.splice(i, 1)
		this.setState({mapList: mapList})
	}
	readMaps(item, i){
		if(item.src){
			return (
			<MapItem key={i}
					src={item.src}
					index={i}
					remove={this.removeMap}
					activate={this.activate}
					/>
			)
		}
	}
	activate(i){
		let imageSrc = this.state.mapList[i].src
		localStorage.setItem("activeMapSrc", imageSrc)
	}
	saveMaps(){
		let list = this.state.mapList
		let mapListData = {}
		mapListData.maps = []
		for (let i in list) {
				let item = list[i]
				if (item && item.src) {
					let mapItem = { src: item.src, id: i }
					mapListData.maps[i] = mapItem
				}
		}
		localStorage.setItem("mapList", JSON.stringify(mapListData));
	}
	render() {
		return (
				<main className="main-container white-text grey darken-4">

					<h1>maps</h1>

					<ul ref={this.mapListContainer} >
						{this.state.mapList.map(this.readMaps)}
					</ul>

					<div className="controls map-controls blue-grey darken-4">
						<Link to={'/'}>back to dashboard</Link>
							<input type="text" ref={this.textInput} className="white-text" placeholder="Enter image URL here" />
							<button onClick={this.getMap} className="btn">Get map</button>
							<button onClick={this.saveMaps} className="btn">Save</button>
					</div>

				</main>
			)
	}
}
