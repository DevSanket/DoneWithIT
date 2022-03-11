import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import Card from './app/Components/Card';
import Icon from './app/Components/Icon';
import ListItem from './app/Components/ListItem';
import Screen from './app/Components/Screen';
import ListingDetailsScreen from './app/Screens/ListingDetailsScreen';
import MessagesScreen from './app/Screens/MessagesScreen';
import ViewImageScreen from './app/Screens/ViewImageScreen';

export default function App() {
  return (
   <Screen>
    <ListItem 
     title="My title"
     subtitle="My Subtitle"
     ImageComponent={<Icon name="email" />}
    />
   </Screen>
  );
}


