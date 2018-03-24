import React, { Component } from "react";
import { connect } from "react-redux";
import Main from "../views/main/Main";
import store from "../../store";
import { updateAppStatus } from "../../actions/appActions";

class MainContainer extends Component {
	static navigationOptions = {
		header: null
	};

	constructor(props) {
		super(props);
		this.state = { clicked: 0 };
		this.updateMessage = this.updateMessage.bind(this);
	}

	updateMessage(message) {
		let clicked = this.state.clicked + 1;

		this.setState({ clicked });
		store.dispatch(updateAppStatus(message));
	}

	render() {
		let message = this.props.status;

		if (this.state.clicked)
			message = this.props.status + " " + this.state.clicked + " times !";
		return <Main message={message} updateMessage={this.updateMessage} />;
	}
}

const mapStateToProps = function(store) {
	return {
		status: store.appState.status
	};
};

export default connect(mapStateToProps)(MainContainer);
