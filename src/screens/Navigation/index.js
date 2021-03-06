import React from 'react';
import {createStackNavigator} from "react-navigation";
import {ScrollView, Text, TouchableHighlight, View} from "react-native";
import AssosScreen from "../Assos/Assos";
import ProfileScreen from "../Profile";
import Icon from "../../components/Icon";
import Arrow from '../../img/icons/arrow_yellow.png'
import styles from '../../styles'
import {ProfileHeader} from "../Profile/ProfileHeader";

class FullWidthButton extends React.Component {
    render() {
        return (
            <TouchableHighlight onPress={this.props.onPress} underlayColor={'#007383'} activeOpacity={0.7}>
                <View style={styles.navigation.fullWidthButton.view}>
                    <Text style={styles.navigation.fullWidthButton.text}>{this.props.name}</Text>
                    <Icon style={{flex: 1}} image={Arrow}/>
                </View>
            </TouchableHighlight>
        )
    }
}

export class NavigationScreen extends React.Component {
    render() {
        return (
            <ScrollView style={styles.navigation.scrollView}>
                <ProfileHeader onPress={() => this.props.navigation.navigate('Profile')}/>
                <FullWidthButton name={'Mon compte'} onPress={() => this.props.navigation.navigate('Profile')}/>
                <FullWidthButton name={'Liste des associations'} onPress={() => this.props.navigation.navigate('Assos')}/>
            </ScrollView>
        );
    }
}

export default NavigationNavigator = createStackNavigator({
    Navigation: {
        screen: NavigationScreen,
        navigationOptions: {
            header: null
        }
    },
    Assos: {
        screen: AssosScreen,
        navigationOptions: {
            headerTitle: 'Associations'
        }
    },
    Profile: {
        screen: ProfileScreen
    }

},{
    initialRouteName: 'Navigation'
});