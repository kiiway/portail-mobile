import React from 'react'
import { createStackNavigator } from 'react-navigation'

// Screens
import List from './List'
import Developper from './Developper'

export default createStackNavigator({
	List: {
		screen: List,
		navigationOptions: ({ navigation }) => ({
			title: "Paramètres"
		})
	},
	Developper: {
		screen: Developper,
		navigationOptions: ({ navigation }) => ({
			title: "Développement"
		})
	},
}, {
	initialRouteName: 'List'
});
