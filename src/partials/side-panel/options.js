import React, { Component } from 'react'

import ListItem from './options-list-item'
import ActiveUnits from './options/active-units'

export default class Options extends Component {

	render() {

		return (
      <div className="header">
		    <ul>
					<ListItem getOption={() => (<ActiveUnits />)}/>
				</ul>
      </div>
		)
	}
}
