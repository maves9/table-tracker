import React, { Component } from 'react'

export default class ListItem extends Component {

	constructor(props) {
		super(props)
		this.state = {toggleExpand: false, optionContainerHeight: 0}
		this.toggleExpand = this.toggleExpand.bind(this)
	}

	toggleExpand(){
		this.setState(prevState => ({
      toggleExpand: !prevState.toggleExpand
    }));

    if (this.state.toggleExpand === false) {
      this.state.optionContainerHeight = this.optionContainer.scrollHeight + "px"
    }else {
      this.state.optionContainerHeight = 0
    }


	}
  componentDidMount() {
    if (this.state.toggleExpand) {
      this.state.optionContainerHeight = this.optionContainer.scrollHeight
    }
  }


	render() {

		let btnClasses = ['btn', 'btn-plus']
		let containerClasses = ['main-container']

		let itemClasses = ["control-list-item", "h6"]

		if(this.state.toggleExpand){
			btnClasses.push('to-minus')
			containerClasses.push('active')
			itemClasses.push("blue-grey", "darken-2")
		}

		return (
			<li className={itemClasses.join(' ')}>
				<div className="control-list-header">
				<p className="control-list-title">{this.props.title}</p>
					<button onClick={this.toggleExpand}
									className={btnClasses.join(' ') }>
						<span></span>
						<span></span>
					</button>
				</div>

        <div className="option-container blue-grey darken-3" ref={element => this.optionContainer = element} style={{maxHeight: this.state.optionContainerHeight}}>
          {this.props.getOption()}
        </div>
			</li>
		)
	}
}
