import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import './master.scss'

import Edit from './pages/edit'
import Maps from './pages/maps'
import Dashboard from './pages/dashboard'


import { BrowserRouter, Route, Switch, BrowserHistory } from 'react-router-dom'

ReactDOM.render(
	<BrowserRouter history={BrowserHistory}>
		<Switch>
			<Route exact path="/" component={Dashboard} />
			<Route path='/edit' component={Edit}/>
			<Route path="/maps" component={Maps}/>
		</Switch>
	</BrowserRouter>
, document.querySelector('[data-js=react-container]'))
