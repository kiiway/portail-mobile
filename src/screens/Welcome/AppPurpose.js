import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';
import List from '../../components/List';
import { _ } from '../../i18n/i18n';


import styles from '../../styles'
import HeaderView from '../../components/HeaderView';


const forMembersData = [
	{ icon: "news",		text: _('purpose.members.news') },
	{ icon: "map",		text: _('purpose.members.map') },
	{ icon: "bell",		text: _('purpose.members.alerts') },
	{ icon: "calendar",	text: _('purpose.members.calendar') },
]
const forInterestedData = [
	{ icon: "news",		text: _('purpose.interested.news') },
	{ icon: "map",		text: _('purpose.interested.map') },
	{ icon: "bell",		text: _('purpose.interested.alerts') },
	{ icon: "calendar",	text: _('purpose.interested.calendar') },
]


// Tab Navigator
const PurposeTabs = createMaterialTopTabNavigator({
	Members: {
		screen: () => (<List data={ forMembersData } />),
		navigationOptions: ({ nav }) => ({
			title: _('utcMember')
		})
	},
	Interested: {
		screen: () => (<List data={ forInterestedData } />),
		navigationOptions: ({ nav }) => ({
			title: _('interested')
		})
	}
}, {
	tabBarOptions: {
		style: styles.tabBar.style,
		labelStyle: styles.tabBar.label,
	},
	backBehavior: 'none',
	initialRouteName: 'Members',
	order: ['Members', 'Interested'],
});

export default class AppPurposeScreen extends React.Component {
	render() {
		const endMessageStyle = styles.get('text.yellow', 'text.center', 'text.h4')
		return (
			<View style={styles.container.default}>
				<HeaderView
					style={{ flex: 3 }}
					title={_('purpose.title')}
					subtitle={_('purpose.subtitle')}
				/>
				<View style={{ flex: 7, justifyContent: 'space-between' }}>
					<View style={{ flex: 6 }}>
						<PurposeTabs />
					</View>
					<View style={{ flex: 2, justifyContent: 'center', paddingHorizontal: 15, marginBottom: 40 }}>
						<Text style={ endMessageStyle }>
							{_('purpose.endMessage')}
						</Text>
					</View>
				</View>
			</View>
		);
	}
}
