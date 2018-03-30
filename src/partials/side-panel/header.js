import React, { Component } from 'react'
import Clock from 'react-live-clock'

export default class Header extends Component {

	render() {
		return (
      <div className="header">
		    <div className="side-panel-time teal accent-4 center-align">
					<Clock className="h2" format={'HH : mm : ss'} ticking={true} />
					<Clock className="h6" format={'DD / MM / YYYY'} ticking={true} />
				</div>
      </div>
		)
	}
}
