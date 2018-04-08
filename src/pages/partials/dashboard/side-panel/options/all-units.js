import React, { Component } from 'react'
import Unit from "./partials/unit-item"
export default class AllUnits extends Component {

	render() {
		return (
			<ul className="option-all-units-list">
				{
					this.props.unitsObj.map(
						(item, i) => {
							return (<Unit key={ i } unitItem={ item }/>)
						}
					)
				}
			</ul>

		)
	}
}
