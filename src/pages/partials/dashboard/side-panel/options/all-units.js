import React, { Component } from 'react'
import Unit from "./partials/unit-item"
export default class AllUnits extends Component {

	componentDidMount(){console.log(this.props);
		const UL = document.querySelector('[data-js=subCollapsible]');
		M.Collapsible.init( UL, {
			accordion: false
		});
	}

	render() {
		return (
			<ul data-js="subCollapsible" className="option-all-units-list collapsible expandable">
				{this.props.unitsObj.map(
						(item, i) => (<Unit key={ i } unitItem={ item }/>)
				)}
			</ul>
		)
	}
}
