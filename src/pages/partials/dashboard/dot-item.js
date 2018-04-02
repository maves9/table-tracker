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
    const coords = {
      x: parseInt(this.props.left),
      y: parseInt(this.props.top),
    };
		return (

  			<li className="dot teal accent-3 circle handle">
          <div className="dot-modal">
            <button className="btn red btn-small" onClick={() => this.props.remove(this.props.index)}>Delete</button>
          </div>
        </li>

		)
	}
}
