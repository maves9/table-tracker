import React, { Component } from 'react'

export default class Dot extends Component {

	constructor(props) {
		super(props)
	}

	render() {
		return (
			<li className="dot"
          left={this.props.left}
          top={this.props.top}>
      <button className="btn red" onClick={() => this.props.remove(this.props.index)}>Delete</button>

			</li>
		)
	}
}
