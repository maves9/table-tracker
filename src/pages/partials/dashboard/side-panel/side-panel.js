import React, { Component } from 'react'
import Resizable from 'react-resizable-box'
import Header from './header'
import Options from './options'
import Footer from './footer'

class SidePanel extends Component {
	constructor(){
		super()
		this.state = {
			hidden: false
		}
		this.toggleHide = this.toggleHide.bind(this)
	}

	toggleHide(){
		this.setState( prevState => ({ hidden: !prevState.hidden }))
	}

	render() {

		let asideClasses = ["white-text", "blue-grey", "darken-3"]
		if (this.state.hidden) {
			asideClasses.push('slide-hide')
		}

		return (
			<aside id="control-panel" className={asideClasses.join(' ')}>

				<Resizable
		  			height={'100%'}
						width={320}
			    	minWidth={300}
		  			className="side-panel-container">

					<div onClick={this.toggleHide} className="close-panel-btn circle btn-floating"><i class="material-icons">keyboard_arrow_left</i></div>

					<Header/>

					<Options
						activeDotId={this.props.activeDotId}
						unitsObj={this.props.unitsObj}
						setUnitsObj={this.props.setUnitsObj}
						/>

					<Footer />

				</Resizable>
			</aside>
		)
	}
}
export default SidePanel ;
