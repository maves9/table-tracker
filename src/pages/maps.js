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
		this.readMaps         = this.readMaps.bind(this)
		this.saveMaps         = this.saveMaps.bind(this)
		this.getMap           = this.getMap.bind(this)
		this.removeMap        = this.removeMap.bind(this)
		this.activate         = this.activate.bind(this)
		this.textInput        = React.createRef()
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
		let mapList = this.state.mapList,
		 		url = this.textInput.current.value
		mapList.push({src: url})
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
		M.toast({html: 'New active pictue'})
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
		let mapList = this.state.mapList
		return (
				<main className="main-container white-text grey darken-4">

					<ul className="container" ref={this.mapListContainer} >
						{mapList.length ? mapList.map(this.readMaps) : <p className="h5">No maps found</p>}
					</ul>

					<div className="controls map-controls blue-grey darken-4">
							<input type="text" ref={this.textInput} className="white-text" placeholder="Enter image URL here" />
							<button onClick={this.getMap} className="btn">Get map</button>
							<Link className="btn btn-small right blue" to={'/'}>back to dashboard</Link>
					</div>

				</main>
			)
	}
}
