import React, { Component } from 'react'

export default class Dot extends Component {

	constructor(props) {
		super(props)
    this.state = {
      toggleModal: false
    }
    this.toggleModal = this.toggleModal.bind(this)
	}
  toggleModal(){
    this.setState(prevState => ({
      toggleModal: !prevState.toggleModal
    }));
  }

	render() {
    const dotStyle = {
      transform: "translate(" + parseInt(this.props.left) + "px , "+parseInt(this.props.top) + "px )"
    };
		const modalClasses = ["dot-modal", "grey", "darken-4", "white-text"]

		if (this.state.toggleModal) {
			modalClasses.push("show")
		}
		return (

  			<li style={dotStyle}>
				
					<div className="dot teal accent-3 circle" onClick={this.toggleModal}></div>

					<div className={modalClasses.join(' ')}>
						<button className="btn red btn-small" onClick={this.toggleModal}>X</button>
					</div>

        </li>

		)
	}
}
