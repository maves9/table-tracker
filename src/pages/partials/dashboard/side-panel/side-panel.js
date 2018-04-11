import React, { Component } from 'react'
import Resizable from 'react-resizable-box'
import Header from './header'
import Options from './options'
import Footer from './footer'

class SidePanel extends Component {


	render() {
		return (
			<aside id="control-panel" className="white-text blue-grey darken-3">
				<Resizable
		  			height={'100%'}
						width={320}
			    	minWidth={300}
		  			className="side-panel-container">
					<div className="close-panel-btn circle btn-floating"></div>
					<Header/>
					<Options
						activeDotId={this.props.activeDotId}
						unitsObj={this.props.unitsObj}
						setUnitsObj={this.props.setUnitsObj}
						/>
					<Footer/>
				</Resizable>
			</aside>
		)
	}
}
export default SidePanel ;
