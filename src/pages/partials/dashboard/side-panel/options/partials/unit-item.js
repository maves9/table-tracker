import React, { Component } from 'react'
import Reservation from "./unit-item-reservation"

export default class UnitItem extends Component {


	render() {

		let reservations = this.props.unitItem.reservations

		return (
      <li>
				<div className="unit-list-item-header blue-grey darken-4  collapsible-header">
					<strong>{this.props.unitItem.name}</strong>
				</div>
				<div className="collapsible-body">
					{reservations.length ?
							<div className="expand-container">
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
					</div>

      </li>
		)
	}
}
