import React, { Component } from 'react'
import Unit from "./partials/unit-item"
export default class AllUnits extends Component {

	componentDidMount(){
		const UL = document.querySelector('[data-js=subCollapsible]');
		M.Collapsible.init( UL, {
			accordion: false
		});
	}

	render() {
		const units = this.props.unitsObj
		return (
			<ul data-js="subCollapsible" className="option-all-units-list collapsible expandable">
				{units.length ?
					units.map(
						(item, i) => (<Unit key={ i } unitItem={ item }/>)
				) : <p>No units found</p>}
			</ul>
		)
	}
}
