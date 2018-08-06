import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from '../../styles';
import { _ } from '../../i18n/i18n';

export default class WelcomeMessageScreen extends React.Component {
	render() {
		const logoStyle = {
			width: 225,
			height: 150,
			marginBottom: 20,
		}
		const titleStyle = styles.get('text.yellow', 'text.h0', 'text.center', 'mb.sm');
		const subtitleStyle = styles.get('text.gray', 'text.h4', 'text.center', 'mb.xl');

		return (
			<View style={ styles.container.center }>
				<Image source={require('../../img/logo_utc.png')} style={ logoStyle } resizeMode={'center'} />
				<Text style={ titleStyle }>{_('welcome.title')}</Text>
				<Text style={ subtitleStyle }>{_('welcome.subtitle')}</Text>
			</View>
		);
	}
}
