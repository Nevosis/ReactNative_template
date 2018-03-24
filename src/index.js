import { Provider, connect } from "react-redux";
import store from "./store";
import { addNavigationHelpers, NavigationActions } from "react-navigation";
import { Text, View, BackHandler } from "react-native";
import React from "react";
import AppWithNavigationState from "./navigators/AppNavigator";
import Main from "./components/views/main/Main";

class App extends React.Component {
	componentDidMount() {
		this.sub = BackHandler.addEventListener("hardwareBackPress", () => {
			store.dispatch(NavigationActions.back());
		});
	}

	componentWillUnmount() {
		this.sub.remove();
	}

	render() {
		return (
			<AppWithNavigationState
				navigation={addNavigationHelpers({
					dispatch: this.props.dispatch,
					state: this.props.nav
				})}
			/>
		);
	}
}

const mapStateToProps = state => {
	return {
		nav: state.nav
	};
};

const AppWithNavigation = connect(mapStateToProps)(App);

const rnTemplate = () => (
	<Provider store={store}>
		<AppWithNavigation />
	</Provider>
);

export default rnTemplate;
