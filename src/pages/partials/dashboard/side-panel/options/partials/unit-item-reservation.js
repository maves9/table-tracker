import React, { Component } from 'react'

export default class Reservation extends Component {

	render() {

		const reservation = this.props.reservation

		return (
      <tr>
				<td>{reservation.name}</td>
				<td>{reservation.timeFrom}</td>
				<td>{reservation.timeTo}</td>
      </tr>
		)
	}
}
