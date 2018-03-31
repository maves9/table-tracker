import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import SidePanel from './partials/side-panel'
import './style.scss'

import Edit from './pages/edit'
import Maps from './pages/maps'
import Dashboard from './pages/dashboard'


import { BrowserRouter as Router, IndexRoute,  Route, Link, hashHistory } from "react-router";

class Layout extends React.Component {
	render() {
		return (
				<SidePanel />
		)
	}
}

ReactDOM.render(
	<Router hashHistory={hashHistory}>
		<Route path="/" component={Layout} >
			<IndexRoute component={Dashboard}/>
			<Route path="/edit" component={Edit} />
			<Route path="/maps" component={Maps} />
		</Route>
	</Router>
	, document.querySelector('[data-js=react-container]')
)
