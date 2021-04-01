import * as React from 'react';
import { Button, View, Text, TextInput, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import firebase from "firebase";
import t from 'tcomb-form-native';

var config = {
  databaseURL: "https://sneh-33f7d-default-rtdb.firebaseio.com",
  projectId: "sneh-33f7d",
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to the Form"
        onPress={() => navigation.navigate('Form')}
      />
    </View>
  );
}

function FormScreen() {


  const Form = t.form.Form;

  const User = t.struct({
    email: t.String,
    name: t.String,
    age: t.String,
    symptoms: t.String,

  });

  firebase.database().ref('UsersList/').push({
  })

  return (
    <View style={styles.container}>
      <Form
        ref={c => this._form = c}
        type={User} />
      <Button
        title="Sign Up!"
        onPress={() => {
          const value = this._form.getValue(); // use that ref to get the form value
          console.log('value: ', value);
          firebase.database().ref('UsersList/').push({
            value

          })
        }}
      />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Form" component={FormScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
});

export default App;
