import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Maps extends React.Component {
	render() {
		return (
				<main className="main-container white-text grey darken-4">
				<h1>maps</h1>
				<Link to={'/'}>back to dashboard</Link>
				</main>
		)
	}
}
