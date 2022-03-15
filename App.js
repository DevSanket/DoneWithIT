import {Text} from 'react-native';
import Screen from './app/Components/Screen';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Button from './app/Components/Button';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tweets = ({navigation}) => (
  <Screen>
    <Text>Tweets</Text>
    <Button title="View Tweet" onPress={() => navigation.navigate("TweetsDetails",{id:1})} />
  </Screen>
)

const TweetsDetails = ({route}) => (
  <Screen>
    <Text>Tweets details {route.params.id}</Text>
  </Screen>
)

const Stack = createStackNavigator();
const Account = () => {
  return (
    <Screen>
      <Text>Account Page</Text>
    </Screen>
  )
}

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name='Feed' component={Tweets} />
    <Tab.Screen name='Account' component={Account} />
  </Tab.Navigator>
)

const StackNavigator = () => (
  <Stack.Navigator initialRouteName='Tweets'>
    <Stack.Screen name='Tweets' component={Tweets} />
    <Stack.Screen name='TweetsDetails' component={TweetsDetails} />
  </Stack.Navigator>
)

export default function App() {
  
  return (
   
    <NavigationContainer>
      <TabNavigator/>
    </NavigationContainer>
    
  )     
}


