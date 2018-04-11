import React, { Component } from 'react'

export default class Options extends Component {
	constructor(){
		super()
		this.state = {
			allUnits: {},
			activeReservations: []
		}
	}
	componentDidMount(){
		this.setState({allUnits: this.props.unitsObj})

		const allUnits =  this.props.unitsObj,
		 			reservations = this.getReservations(this.props.unitsObj),
		 			activeReservations = this.reservationIsActive(reservations)

		this.setState({activeReservations: activeReservations})
	}
	componentDidUpdate(prevState){
		console.log(prevState);
		if (prevState.allUnits ===  this.props.unitsObj) {

		const allUnits =  this.props.unitsObj,
					reservations = this.getReservations(allUnits),
					activeReservations = this.reservationIsActive(reservations)

		this.setState({ allUnits: allUnits, activeReservations: activeReservations })
		}
	}
	getReservations(obj){
		const allReservations = []
		obj.map((unit) => {
			if (unit.reservations.length) {
				unit.reservations.map((reservation) => {
					allReservations.push(reservation);
				})
			}
		})
		return allReservations
	}
	reservationIsActive(obj){

		const activeReservations = []

		let d = new Date(),
				currentHour = d.getHours(),
				currentMinute = d.getMinutes(),
				currentDay = d.getDate(),
				currentMounth = d.getMonth()+1, //January is 0
				currentYear = d.getFullYear()

		obj.map((reservation) => {


			let dateArr = reservation.date.split('-'),
					rDay = parseInt(dateArr[0]),
					rMounth = parseInt(dateArr[1]),
					rYear = parseInt(dateArr[2])


			if (currentDay >= rDay &&
					currentMounth >= rMounth &&
					currentYear >= rYear) {

			let startHour    = parseInt(reservation.timeFrom.slice(0,2)),
					startMinute  = parseInt(reservation.timeFrom.slice(3,5)),
					finishHour   = parseInt(reservation.timeTo.slice(0,2)),
					finishMinute = parseInt(reservation.timeTo.slice(3,5))


				if (currentHour >= startHour &&
						currentMinute >= startMinute &&
						currentHour <= finishHour &&
						currentMinute <= finishMinute ) {
							activeReservations.push(reservation)

				}
			}
		})
		return activeReservations
	}

	render() {

		let reservations = this.state.activeReservations
		return (
			<ul className="collection">
			{ reservations.map((reservation, i) => {
				return (<li key={ i } className="collection-item blue-grey darken-3">{reservation.name} <br/> <small>( from: {reservation.timeFrom} to: {reservation.timeTo} )</small></li>)
			})}
	    </ul>
		)
	}
}
