import React, { Component } from 'react'
import Clock from 'react-live-clock'

let dotData = JSON.parse(localStorage.getItem('units'))

export default class NewTime extends Component {
	constructor(){
		super()
		this.newTime = this.newTime.bind(this)
	}

	newTime(){

	}

	render() {

		return (
			<div className="row">
				<form className="col s12">

				<div className="row">
					<div className="input-field col s12">
						<input type="text" className="validate white-text" placeholder="Name" />
					</div>
				</div>
					<div className="row">
					<div className="input-field col s12">
						<input placeholder="Placeholder" type="date" className="validate white-text" />
					</div>
						<div className="input-field col s6">
							<input placeholder="Placeholder" type="time" className="validate white-text" />
						</div>
					</div>

					<button onClick={this.newTime} className="btn">Submit</button>
				</form>
			</div>
		)
	}
}
