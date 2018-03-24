import React, { Component } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

class Main extends Component {
	render() {
		return (
			<View style={style.mainView}>
				<Text>{this.props.message}</Text>
				<Button
					title="Click me"
					onPress={() => this.props.updateMessage("Clicked")}
				/>
			</View>
		);
	}
}

const style = StyleSheet.create({
	mainView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#F5FCFF"
	}
});

export default Main;
