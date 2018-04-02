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
      toggleModal: !prevState.toggleExpand
    }));
  }

	render() {
    const dotStyle = {
      transform: "translate("+parseInt(this.props.left)+"px , "+parseInt(this.props.top)+"px )"
    };
		return (

  			<li className="dot teal accent-3 circle handle" style={dotStyle}>
          <div className="dot-modal">
            <button className="btn red btn-small" onClick={() => this.props.remove(this.props.index)}>Delete</button>
          </div>
        </li>

		)
	}
}
