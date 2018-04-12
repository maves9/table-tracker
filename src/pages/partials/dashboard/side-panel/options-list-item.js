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
				headerClasses = ["control-list-header", "collapsible-header", "blue-grey", "darken-3"]

		if(this.state.toggleExpand){
			console.log('hi');
			btnClasses.push('to-minus')
			headerClasses.push("blue-grey", "darken-2")
		}

		return (
			<li className="control-list-item h6">
				<div className={headerClasses.join(' ')} onClick={this.toggleExpand}>
					<p className="control-list-title">{this.props.title}</p>
					<button className={ btnClasses.join(' ') }>
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
