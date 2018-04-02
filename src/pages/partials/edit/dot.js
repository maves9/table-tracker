import React, { Component } from 'react'
import Draggable from 'react-draggable'

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

	let modalClasses = ["control-list-modal", "h6"]

		if(this.state.toggleModal){
			modalClasses.push("blue-grey", "darken-2")
	   }

    const coords = {
      x: parseInt(this.props.left),
      y: parseInt(this.props.top)
    }

		return (
      <Draggable
        handle=".handle-draggable"
        defaultPosition={coords}
        position={null}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}
        >

  			<li className="dot teal accent-3 circle handle-draggable" onClick={this.toggleModal}>
          <div className="dot-modal">
            <button className="btn red btn-small" onClick={() => this.props.remove(this.props.index)}>Delete</button>
          </div>
        </li>
      </Draggable>

		)
	}
}
