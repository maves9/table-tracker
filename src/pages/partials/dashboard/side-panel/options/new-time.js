import React, { Component } from 'react'
import Clock from 'react-live-clock'

let dotData = JSON.parse(localStorage.getItem('units'))

export default class NewTime extends Component {
	constructor(){
		super()
		this.setNewTime = this.setNewTime.bind(this)
		this.datePicker = React.createRef()
		this.timeFrom = React.createRef()
		this.timeTo = React.createRef()
		this.nameInput = React.createRef()
	}
	componentDidMount(){
		const dateInput = this.datePicker.current,
					timeFrom = this.timeFrom.current,
					timeTo = this.timeTo.current

		M.Datepicker.init( dateInput, {format: "dd-mm-yyyy"} )
		M.Timepicker.init( timeFrom, {defaultTime: "now", autoClose: true} )
		M.Timepicker.init( timeTo, {defaultTime: "now", autoClose: true} )
	}

	setNewTime(e){
		e.preventDefault()

		const dateInput = this.datePicker.current,
					timeFrom = this.timeFrom.current,
					timeTo = this.timeTo.current,
				  nameInput = this.nameInput.current

		if (dateInput.value !== "" &&
				timeFrom.value  !== "" &&
				timeTo.value    !== "" &&
				nameInput.value !== "" ){

			let obj = {
				name: nameInput.value,
				date: dateInput.value,
				timeFrom: timeFrom.value,
				timeTo: timeTo.value
			}
			let dotData = JSON.parse(localStorage.getItem('units'))


			dotData.dots.map( (item, i) => {

				if (this.props.activeDotId === item.id) {
					item.reservations.push(obj)
				}

			})
			localStorage.setItem('units', JSON.stringify(dotData))

			dateInput.value = ""
			timeFrom.value  = ""
			timeTo.value    = ""
			nameInput.value = ""
			M.toast({html: 'New time added', classes: 'green'})
		}else {
			M.toast({html: 'Please fill out all the feilds',  classes: 'red'})
		}
this.forceUpdate()
	}


	render() {
		const activeDotBox = () => {
			if (this.props.activeDotId !== -1) {
				return (
					<div className="row">
						<div className="input-submit-field col s12">
							<p>Active unit: {this.props.activeDotId}</p>
							<button type="submit" onClick={this.setNewTime} className="btn btn-small">Submit</button>
						</div>
					</div>
				)
			}else {
				return (
					<div className="row">
						<div className="input-submit-field col s12">
							<p>Please choose a dot</p>
							<button className="btn btn-small disabled">Submit</button>
					</div>
				</div>
				)
			}
		}

		let inputClasses = ["validate", "white-text"]

		return (
			<div className="row">
				<form className="col s12">
				<div className="row">
					<div className="input-field col s12">
						<label htmlFor="name">Name </label>
						<input type="text" id="name" className={inputClasses.join(' ')} ref={this.nameInput} />
					</div>
					<div className="input-field col s12">
						<label htmlFor="date">Date </label>
						<input id="date" type="text" ref={this.datePicker} className={inputClasses.join(' ')} />
					</div>
						<div className="input-field col s6">
							<label htmlFor="time-from">From </label>
							<input id="time-from"  type="text" ref={this.timeFrom} className={inputClasses.join(' ')} />
						</div>
						<div className="input-field col s6">
							<label htmlFor="time-to">To </label>
							<input id="time-to" type="text" ref={this.timeTo} className={inputClasses.join(' ')} />
						</div>
					</div>

					{activeDotBox()}

				</form>
			</div>
		)
	}
}
