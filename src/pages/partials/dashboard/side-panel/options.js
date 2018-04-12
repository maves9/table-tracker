import React, { Component } from 'react'

import ListItem from './options-list-item'
import ActiveUnits from './options/active-units'
import AllUnits from './options/all-units'
import NewTime from './options/new-time'

export default class Options extends Component {
	constructor(props){
		super(props)
		this.state = {unitsObj: this.props.unitsObj}
	}

	componentDidMount(){
		const UL = document.querySelector('[data-js=collapsible]');
		M.Collapsible.init( UL, { accordion: false });
	}

	render() {

		return (
      <div className="options-list">
		    <ul data-js="collapsible" className="collapsible expandable">
					<ListItem title="Active units" getOption={() =>(<ActiveUnits unitsObj={this.state.unitsObj}/>)} />
					<ListItem title="All units" getOption={() => (<AllUnits unitsObj={this.state.unitsObj} />)} />
					<ListItem title="New time" getOption={() => (<NewTime  unitsObj={this.state.unitsObj} activeDotId={this.props.activeDotId} setUnitsObj={this.props.setUnitsObj}/> )} />
				</ul>
      </div>
		)
	}
}
