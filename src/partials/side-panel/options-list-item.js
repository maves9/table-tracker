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

		let btnClasses = ['btn', 'btn-plus']
		let containerClasses = ['main-container']

		if(this.state.toggleExpand){
			btnClasses.push('to-minus')
			containerClasses.push('active')
		}

		return (
			<li className="control-list-item h6">
				<div className="control-list-header">
				{this.props.title}
					<button onClick={this.toggleExpand}
									className={btnClasses.join(' ') }>
						<span></span>
						<span></span>
					</button>
				</div>

        {this.props.getOption()}

			</li>
		)
	}
}
