/**
 * Affiche la liste des assos en fonction de données du portail
 * @author Romain Maliach-Auguste <r.maliach@live.fr>
 *
 * @copyright Copyright (c) 2017, SiMDE-UTC
 * @license AGPL-3.0
**/

import React from 'react';
import { View, Text, Image, Button } from 'react-native';
export default class AssoDetailsScreen extends React.Component {

constructor(props) {
	super(props);
	this._loadDetails();
	this.isUnMounted = false;
	
}
	state = {
		warn: false,
		message : "",
		description : "",
		type : "",
		parentId : "",
		parentName : "",
	}

warn(text) {
	console.warn(text);
	if (this.isUnmounted) {return;}
	this.setState(prevState => ({ ...prevState, warn: true, message: text}));
}


_loadDetails() {
	if (this.isUnmounted) {return;}
	const { navigation } = this.props;
	const id = navigation.getParam('id', 'NO-ID');
		if(id == "NO-ID") {throw "No asso id provided!";}
	this.portail = navigation.getParam('portailInstance', 'NO-PORTAIL');
		if(this.portail == "NO-PORTAIL") {throw "No portail instance provided!";}
		if(!this.portail.isConnected()) {throw "The provided Portail instance is not connected!";}
	
	this.portail.getAssoDetails(id).then( (data) => {
		if (this.isUnmounted) {return;}
		if(id != 1 && id != '1') {
			this.setState(prevState => ({ ...prevState, description: data["description"], type: data["type"]["name"], parentId: data["parent"]["id"], parentName : data["parent"]["shortname"]}));
		}
		else {
			//root : pas de parent
			this.setState(prevState => ({ ...prevState, description: data["description"], type: data["type"]["name"]}));
		}
	}).catch( ([response, status]) => {
		this.warn("Erreur lors de la connexion au portail : " + response + ' --- ' + status);
	});
}

render() {
	
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
	{this.state.warn && <Text>{this.state.message}</Text>}
	<Text>{this.state.description}</Text>
	<Text>Type d'association : {this.state.type}</Text>
	<Text>{this.state.parentName}</Text>
      </View>
    );
  }

componentWillUnmount() {
if(this.portail !== undefined) {this.portail.abortRequest();}
this.isUnMounted = true;
}
}