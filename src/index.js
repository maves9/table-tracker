import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import SidePanel from './partials/side-panel'
import './style.scss'

class App extends React.Component {
	render() {
		return (
				<SidePanel />
		)
	}
}

ReactDOM.render(<App />, document.querySelector('[data-js=react-container]'))
