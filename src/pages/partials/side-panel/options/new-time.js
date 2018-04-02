import React, { Component } from 'react'

export default class NewTime extends Component {

	render() {

		return (
			<div className="row">
				<form className="col s12">
					<div className="row">
						<div className="input-field col s6">
							<input placeholder="Placeholder" id="first_name" type="time" className="validate white-text" />
						</div>
						<div className="input-field col s12">
							<input id="last_name" placeholder="Placeholder" type="date" className="validate white-text" />
						</div>
					</div>

					<div className="row">
						<div className="input-field col s12">
							<input id="email" type="text" className="validate white-text" placeholder="Placeholder" />
							<span className="helper-text" data-error="wrong" data-success="right">Helper text</span>
						</div>
					</div>

				</form>
			</div>
		)
	}
}
