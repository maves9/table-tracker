import React, { Component } from 'react'

export default class Reservations extends Component {

	render() {

		return (
			<div className="row">
				<table>
	        <thead>
	          <tr>
	              <th>Name</th>
	              <th>From</th>
	              <th>To</th>
	          </tr>
	        </thead>
	        <tbody>
	          <tr>
	            <td>Alvin</td>
	            <td>Eclair</td>
	            <td>$0.87</td>
	          </tr>
	          <tr>
	            <td>Alan</td>
	            <td>Jellybean</td>
	            <td>$3.76</td>
	          </tr>
	        </tbody>
	      </table>
			</div>
		)
	}
}
