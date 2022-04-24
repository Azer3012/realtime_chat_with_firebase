import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';

import {NativeScreenContainer} from 'react-native-screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from './pages/auth/login/Login';
import Sign from './pages/auth/sign/Sign';

import FlashMessage from 'react-native-flash-message';
import Messages from './pages/messages/Messages';

import auth from '@react-native-firebase/auth';
import colors from './styles/colors';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();
const App = () => {
  const [userSession, setUserSession] = useState();

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      setUserSession(!!user);
    });
  }, []);
  const AuthStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Sign" component={Sign} />
      </Stack.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!userSession ? (
          <Stack.Screen name="AuthStack" component={AuthStack} options={{headerShown:false}} />
        ) : (
          <Stack.Screen
            name="Messages"
            component={Messages}
            options={{
              title: 'Chat',
              headerTintColor: colors.green,
              headerRight: () => (
                <Icon name="logout" color={colors.green} size={30} onPress={()=>auth().signOut()} />
              ),
            }}
          />
        )}
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
