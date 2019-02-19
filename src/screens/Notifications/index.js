import React from 'react';
import { View, Text} from 'react-native';
import List from '../../components/List';

import Portail from '../../services/Portail';

const forMembersData = [
	{ icon: {uri: 'https://www.utc.fr/fileadmin/user_upload/SITE-UTC/images/Home/Logotheque/sigle_UTC.jpg'},			text: "Suivre et être notifié des actualités de l'UTC et de vos associations préférées" },
	{ icon: "map",			text: "Se repérer dans le campus" },
	{ icon: "bell",			text: "Etre notifié des résultats des examens et d'événements qui vous intéressent" },
	{ icon: "calendar",		text: "Consulter et synchroniser son agenda scolaire, associatif et personnel" },
]

export default class NotificationsScreen extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {data : forMembersData};
		this._loadNotifications();
	}

	_loadNotifications() {
		Portail.getUserNotifications().then( ([content,status]) => console.log([status + " received data : ",content])).catch( ([e,s]) => console.warn(["Error "+ s +" while loading user notifications : ", e]));
	}
	render() {
		return (
			<View>
				<Text>Notifications Screen!</Text>
				<List data={this.state.data}/>
			</View>
		);
	}
}