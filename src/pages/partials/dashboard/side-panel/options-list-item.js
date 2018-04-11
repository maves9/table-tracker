import React, { Component } from 'react'

export default class ListItem extends Component {

	constructor(props) {
		super(props)
		this.state = {toggleExpand: false}
		this.toggleExpand = this.toggleExpand.bind(this)
	}

	toggleExpand(){
		this.setState(prevState => ({
      toggleExpand: !prevState.toggleExpand
    }));
	}

	render() {
		let btnClasses = ['btn', 'btn-plus', 'btn-flat'],
				containerClasses = ['main-container'],
				itemClasses = ["control-list-item", "h6"]

		if(this.state.toggleExpand){
			btnClasses.push('to-minus')
			itemClasses.push("blue-grey", "darken-2")
		}

		return (
			<li className={itemClasses.join(' ')}>
				<div className="control-list-header collapsible-header blue-grey darken-3">
					<p className="control-list-title">{this.props.title}</p>
					<button className={btnClasses.join(' ') }>
						<span></span>
						<span></span>
					</button>
				</div>

        <div className="option-container blue-grey darken-3 collapsible-body ">
          {this.props.getOption()}
        </div>
			</li>
		)
	}
}
