import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TextInput, Button, View } from 'react-native';
import firebase from "firebase";
import t from 'tcomb-form-native';

var config = {
  databaseURL: "https://sneh-33f7d-default-rtdb.firebaseio.com",
  projectId: "sneh-33f7d",
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const Form = t.form.Form;

const User = t.struct({
  email: t.String,
  name: t.String,
  age: t.String,
  Symptoms: t.String,
  
});

firebase.database().ref('UsersList/').push({
})

export default class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const value = this._form.getValue(); // use that ref to get the form value
    console.log('value: ', value);
    firebase.database().ref('UsersList/').push({
      value

    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Form 
        ref={c => this._form = c}
        type={User} />
        <Button
          title="Sign Up!"
          onPress={this.handleSubmit}
        />
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
});