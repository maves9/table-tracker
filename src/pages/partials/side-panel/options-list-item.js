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
      this.state.optionContainerHeight = this.optionContainer.scrollHeight
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


        <div className="option-container" ref={element => this.optionContainer = element} style={{maxHeight: this.state.optionContainerHeight+"px"}}>
          {this.props.getOption()}
        </div>
			</li>
		)
	}
}
