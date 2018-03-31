import React, { Component } from 'react'
import { BrowserRouter as Router, IndexRoute,  Route, Link, hashHistory } from "react-router"
import SidePanel from '../partials/side-panel'

export default class Dashboard extends React.Component {
	render() {
		return (
				<main>
				<SidePanel />
				dashboard
				</main>
		)
	}
}
