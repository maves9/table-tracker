import React, { Component } from 'react'
import { Link } from "react-router-dom"
import MapItem from "./partials/map/map-list-item"

let imageSrc = JSON.parse(localStorage.getItem("image")) || ""
let mapList = JSON.parse(localStorage.getItem("mapList")) || []

export default class Maps extends React.Component {
	constructor(){
		super()
		this.state = {
			mapList: mapList.maps
		}
		this.readMaps = this.readMaps.bind(this)
		this.saveMaps = this.saveMaps.bind(this)

		this.getMap = this.getMap.bind(this)
		this.removeMap = this.removeMap.bind(this)
		this.activate = this.activate.bind(this)
		this.textInput = React.createRef()
		this.mapListContainer = React.createRef()
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
		alert('saved')
		localStorage.setItem("mapList", JSON.stringify(mapListData));
	}
	render() {
		return (
				<main className="main-container white-text grey darken-4">

					<h1>maps</h1>

					<ul ref={this.mapListContainer} >
						{this.state.mapList.map(this.readMaps)}
					</ul>

					<div className="controls grey darken-4">
						<Link to={'/'}>back to dashboard</Link>
							<input type="text" ref={this.textInput} className="white-text" placeholder="Enter image URL here" />
							<button onClick={this.getMap} className="btn">Get map</button>
							<button onClick={this.saveMaps} className="btn">Save</button>
					</div>
					
				</main>
			)
	}
}
