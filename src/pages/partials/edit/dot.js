import React, { Component } from 'react'
import Draggable from 'react-draggable'

export default class Dot extends Component {

	constructor(props) {
		super(props)

    this.state = {
      togglePulse: false,
			dragging: false
    }
    this.toggleModal = this.toggleModal.bind(this)
		this.handleStop =this.handleStop.bind(this)
		this.handleStart =this.handleStart.bind(this)
	}
  toggleModal(){

  }
	handleStart(){


	}
	handleStop(){
		this.setState(
			prevState => ({
				togglePulse: !prevState.togglePulse
			})
		)

		setTimeout(function() {
			this.setState(
				prevState => ({
					togglePulse: !prevState.togglePulse
				})
			)
		}.bind(this), 400 )

	}
	render() {

		let modalClasses = ["control-list-modal", "h6"]
		let dotClasses = ["dot", "teal", "accent-3", "circle", "handle-draggable", "z-depth-3"]
		//modalClasses.push("blue-grey", "darken-2")

		if(this.state.togglePulse){
			dotClasses.push('pulse')
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
        onStop={this.handleStop}
        >

  			<li className={dotClasses.join(' ')} onClick={this.toggleModal}>
          <div className="dot-modal">
            <button className="btn red btn-small" onClick={() => this.props.remove(this.props.index)}>Delete</button>
          </div>
        </li>
      </Draggable>

		)
	}
}
