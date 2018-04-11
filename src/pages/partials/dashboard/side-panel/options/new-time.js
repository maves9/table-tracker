import React, { Component } from 'react'
import Clock from 'react-live-clock'

let dotData = JSON.parse(localStorage.getItem('units'))

export default class NewTime extends Component {
	constructor(props){
		super(props)

		this.state = {unitsObj: this.props.unitsObj}

		this.setNewTime = this.setNewTime.bind(this)
		this.datePicker = React.createRef()
		this.timeFrom = React.createRef()
		this.timeTo = React.createRef()
		this.nameInput = React.createRef()
	}
	componentDidMount(){
		const dateInput = this.datePicker.current,
					timeFrom = this.timeFrom.current,
					timeTo = this.timeTo.current,
					todaysDate  = new Date,
					timepickerOptions = {defaultTime: "now", autoClose: true, twelveHour: false},
					datePickerOptions = {format: "dd-mm-yyyy", minDate: todaysDate, defaultDate: todaysDate, firstDay: 1}

		M.Datepicker.init( dateInput, datePickerOptions  )
		M.Timepicker.init( timeFrom, timepickerOptions )
		M.Timepicker.init( timeTo, timepickerOptions )
	}

	setNewTime(e){
		e.preventDefault()

		const dateInput = this.datePicker.current,
					timeFrom  = this.timeFrom.current,
					timeTo    = this.timeTo.current,
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

			this.state.unitsObj.map( (item, i) => {
				if (this.props.activeDotId === item.id) {
					item.reservations.push(obj)
				}
			})

			this.props.setUnitsObj(this.state.unitsObj)

			dateInput.value = ""
			timeFrom.value  = ""
			timeTo.value    = ""
			nameInput.value = ""

			M.toast({html: 'New time added', classes: 'green'})

		}else {
			dateInput.blur()
			timeFrom.blur()
			timeTo.blur()
			nameInput.blur()
			M.toast({html: 'Please fill out all the feilds',  classes: 'red'})
		}
	}


	render() {
		const activeDotBox = () => {
			if (this.props.activeDotId !== -1) {
				return (
						<div className="input-submit-field col s12">
							<p>Active unit: {this.props.activeDotId}
								<button type="submit" onClick={this.setNewTime} className="btn btn-small right">Submit</button>
							</p>
						</div>
				)
			}else {
				return (
						<div className="input-submit-field col s12">
							<p>Please choose a unit
								<button className="btn btn-small disabled right">Submit</button>
							</p>
					</div>
				)
			}
		}

		let inputClasses = ["validate", "white-text"]

		return (
			<div className="row">
				<form>
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
					{activeDotBox()}
				</form>
			</div>
		)
	}
}
