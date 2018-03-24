import React from "react";
import PropTypes from "prop-types";
import { View, StatusBar, Animated, Easing } from "react-native";
import { connect } from "react-redux";
import { addNavigationHelpers, StackNavigator } from "react-navigation";

import Main from "../components/container/MainContainer";

export const AppNavigator = StackNavigator({
	Main: { screen: Main }
});

const AppWithNavigationState = ({ dispatch, nav }) => <AppNavigator />;

AppWithNavigationState.propTypes = {
	dispatch: PropTypes.func.isRequired,
	nav: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	nav: state.nav
});

export default connect(mapStateToProps)(AppWithNavigationState);
