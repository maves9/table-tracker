import React, { Component } from 'react'

export default class Dot extends Component {

	constructor(props) {
		super(props)

	}

	render() {

		let props = this.props

		const dotStyle = {
      transform: "translate(" + parseInt(this.props.left) + "px , "+parseInt(this.props.top) + "px )"
    };
		const modalClasses = ["dot-modal", "grey", "darken-4", "white-text"],
					dotClasses   = ["z-depth-3", "circle", "dot", "green"]

		if (props.id === props.activeDotId) {
			modalClasses.push("show")
			dotClasses.push("pulse")
		}
		return (
  			<li style={dotStyle} className="circle dot">
					<div  data-id={this.props.id} className={dotClasses.join(' ')} onClick={this.toggleModal}></div>
					<div className={modalClasses.join(' ')}>
						<button className="btn red btn-small" onClick={this.toggleModal}>X</button>
					</div>
        </li>
		)
	}
}
