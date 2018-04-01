import React, { Component } from 'react'
import { BrowserRouter as Router, IndexRoute,  Route, Link } from 'react-router-dom'
import SidePanel from '../partials/side-panel'

export default class Dashboard extends React.Component {
	render() {
		return (
				<main className="">
				<SidePanel />

				dashboard
				</main>
		)
	}
}
