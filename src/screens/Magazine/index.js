import React from 'react';
import { View, WebView } from 'react-native';

import styles from '../../styles'

export default class MagazineScreen extends React.Component {
	render() {
		return (
			<WebView
				source={{ uri: 'https://interactions.utc.fr' }}
				originWhitelist={[ 'https://interactions.utc.fr' ]}
			/>
		);
	}
}
