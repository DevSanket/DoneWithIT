import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import Card from './app/Components/Card';
import ListingDetailsScreen from './app/Screens/ListingDetailsScreen';
import MessagesScreen from './app/Screens/MessagesScreen';
import ViewImageScreen from './app/Screens/ViewImageScreen';

export default function App() {
  return (
   <MessagesScreen />
  );
}


