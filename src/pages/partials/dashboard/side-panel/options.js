import React, { Component } from 'react'

import ListItem from './options-list-item'
import ActiveUnits from './options/active-units'
import AllUnits from './options/all-units'
import NewTime from './options/new-time'

export default class Options extends Component {

	render() {

		return (
      <div className="options-list">
		    <ul>
					<ListItem title="Active units" getOption={() => (<ActiveUnits />)}/>
					<ListItem title="All units" getOption={() => (<AllUnits />)}/>
					<ListItem title="New time" getOption={() => (<NewTime  activeDotId={this.props.activeDotId} />)}/>

				</ul>
      </div>
		)
	}
}
