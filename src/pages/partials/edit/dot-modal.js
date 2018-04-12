import React, { Component } from 'react'

export default class DotModal extends Component {

	constructor(props) {
		super(props)

    this.state = {
      closeModal: false
    }

    this.closeModal = this.closeModal.bind(this)
    this.nameInput = React.createRef()
	}
	componentDidMount(){
		if ("name" in  this.props.obj) {

			this.setState({ inputValue: this.props.obj.name })
		}
	}

  closeModal(e){

    let dot = this.props.obj

    dot.name = this.nameInput.current.value

    this.props.toggleModal(e, dot)

		this.setState({inputValue: dot.name})

  }

	render() {

		return (
            <div className="dot-edit-modal-overlay">
              <div className="dot-edit-modal grey darken-4 card">
                <div className="row">
                  <div className="input-field col s12">
                    <input ref={this.nameInput} placeholder="Unit name" defaultValue={this.state.inputValue} type="text" className="validate white-text" />
                  </div>
                </div>
                <div className="row dot-edit-modal-footer">
                  <div className="col s6">
                      <button className="btn btn-small" onClick={this.closeModal}>Close</button>
                  </div>
                  <div className="col s6">
                      <button className="btn red btn-small right" onClick={() => this.props.removeDot(this.props.obj.id)}>Delete Unit</button>
                  </div>
                </div>
              </div>
            </div>
		)
	}
}
