import React, { Component } from 'react'
import Reservation from "./unit-item-reservation"

export default class UnitItem extends Component {
	constructor(props){
		super(props)
		this.state = {
			toggleExpand: false
		}

		this.toggleExpand = this.toggleExpand.bind(this)

	}
	componentDidMount() {
		if (this.state.toggleExpand) {
			this.state.optionContainerHeight = this.optionContainer.scrollHeight
		}
	}
	toggleExpand(){
		this.setState(prevState => ({
			toggleExpand: !prevState.toggleExpand
		}));

		if (this.state.toggleExpand === false) {
			this.state.optionContainerHeight = this.optionContainer.scrollHeight
		}else {
			this.state.optionContainerHeight = 0
		}

	}

	render() {

		let reservations = this.props.unitItem.reservations

		return (
      <li>
				<div className="unit-list-item-header blue-grey darken-4" onClick={this.toggleExpand}>
					<strong>{this.props.unitItem.name}</strong>
				</div>

					{reservations.length ?
							<div className="expand-container" ref={element => this.optionContainer = element} style={{maxHeight: this.state.optionContainerHeight+"px"}}>
									<table className="reservation-table">
										<thead>
											<tr>
													<th>Name</th>
													<th>From</th>
													<th>To</th>
											</tr>
										</thead>
										<tbody>
										{reservations.map( (item, i) => {
											return <Reservation key={ i } reservation={ item } />
										})}
										</tbody>
									</table>
							</div>
						:
						<p>No reservations for this Unit</p>
					}

      </li>
		)
	}
}
