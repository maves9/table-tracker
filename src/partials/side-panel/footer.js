import React, { Component } from 'react'
import { BrowserRouter as Router, IndexRoute,  Route, Link, hashHistory } from 'react-router-dom'

export default class Footer extends Component {

	render() {
		return (
      <div className="footer card-panel blue-grey darken-4">
        <Link to={'/maps'} className="btn light-blue darken-2">Choose Map</Link>
				<Link to={'/edit'} className="light-blue-text text-darken-2">Edit Map</Link>
			</div>
		)
	}
}
