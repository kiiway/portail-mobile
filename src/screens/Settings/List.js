import React from 'react'
import { SectionList, View, Text } from 'react-native'
import Icon from '../../components/Icon'
import { simple as listStyle } from '../../styles/list'

const settingList = [
	{
		title: "L'application",
		data: [
			{ to: '', icon: null, text: "Mon feed" },
			{ to: '', icon: null, text: "Raccourcis" },
			{ to: '', icon: null, text: "Développement" },
			{ to: '', icon: null, text: "Notifications" },
		]
	},
	{
		title: "Le Portail",
		data: [
			{ to: '', icon: null, text: "Mon feed" },
			{ to: '', icon: null, text: "Raccourcis" },
		]
	},
	{
		title: "ENT",
		data: [
			{ to: '', icon: null, text: "Mon feed" },
			{ to: '', icon: null, text: "Raccourcis" },
		]
	},
]


export default class SettingsListScreen extends React.Component {

	_renderSectionHeader = ({ section }) => (
		<Text style={ listStyle.header }>{ section.title }</Text>
	)

	_renderItem = ({ item, index, section }) => (
		<View style={ listStyle.itemView }>
			{ item.icon && <Icon image={ item.icon } /> }
			<Text style={ listStyle.itemTitle }>{ item.text }</Text>
		</View>
	)

	_keyExtractor = (item, index) => item.id || index

	render() {
		return (
			<SectionList
				renderItem={ this._renderItem }
				renderSectionHeader={ this._renderSectionHeader }
				sections={ settingList }
				keyExtractor={ this._keyExtractor }
			/>
		)
	}
}