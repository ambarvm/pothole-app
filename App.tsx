import 'react-native-gesture-handler';

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './components/Main';
import Signin from './components/Signin';

const Stack = createStackNavigator();

export default class App extends Component {
	render() {
		return (
			<NavigationContainer>
				<Stack.Navigator headerMode="none">
					<Stack.Screen name="Home" component={Main} />
					<Stack.Screen name="SignIn" component={Signin} />
				</Stack.Navigator>
			</NavigationContainer>
		);
	}
}

const styles = StyleSheet.create({
	fab: {
		position: 'absolute',
		margin: 16,
		alignSelf: 'center',
		backgroundColor: 'red',
		bottom: 0,
	},
});

function isusersignedin() {
	return false;
}
//export default App;
