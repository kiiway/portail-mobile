import React from 'react';
import { View, Text} from 'react-native';
import List from '../../components/List';

const forMembersData = [
	{ icon: {uri: 'https://www.utc.fr/fileadmin/user_upload/SITE-UTC/images/Home/Logotheque/sigle_UTC.jpg'},			text: "Suivre et être notifié des actualités de l'UTC et de vos associations préférées" },
	{ icon: "map",			text: "Se repérer dans le campus" },
	{ icon: "bell",			text: "Etre notifié des résultats des examens et d'événements qui vous intéressent" },
	{ icon: "calendar",		text: "Consulter et synchroniser son agenda scolaire, associatif et personnel" },
]

export default class NotificationsScreen extends React.Component {
	render() {
		return (
			<View>
				<Text>Notifications Screen!</Text>
				<List data={forMembersData}/>
			</View>
		);
	}
}

