import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import './master.scss'

import Edit from './pages/edit'
import Maps from './pages/maps'
import Dashboard from './pages/dashboard'
import { BrowserRouter, Route } from 'react-router-dom'



ReactDOM.render(
	<BrowserRouter>
				<Route path="/" component={Dashboard} ></Route>
	</BrowserRouter>
, document.querySelector('[data-js=react-container]'))
