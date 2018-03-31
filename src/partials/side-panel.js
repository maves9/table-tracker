import React, { Component } from 'react'
import Header from './side-panel/header'
import Options from './side-panel/options'
import Footer from './side-panel/footer'
import Resizable from 'react-resizable-box'

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
					<Options/>
					<Footer/>
				</Resizable>
			</aside>
		)
	}
}
export default SidePanel ;
