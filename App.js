import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,Switch } from 'react-native';
import AppTextInput from './app/Components/AppTextInput';
import Card from './app/Components/Card';
import Icon from './app/Components/Icon';
import ListItem from './app/Components/ListItem';
import Screen from './app/Components/Screen';
import AccountScreen from './app/Screens/AccountScreen';
import ListingDetailsScreen from './app/Screens/ListingDetailsScreen';
import ListingScreen from './app/Screens/ListingScreen';
import MessagesScreen from './app/Screens/MessagesScreen';
import ViewImageScreen from './app/Screens/ViewImageScreen';
import React,{useState} from 'react';
import AppPicker from './app/Components/AppPicker';

const categories = [
  {label:"Furniture",value:1},
  {label:"Clothing",value:2},
  {label:"Cameras",value:3}
];

export default function App() {

  const [category,setCategory] = useState();
  
  return (
    <Screen>
      <AppPicker 
      selectedItem={category}
      onSelectItem={item => setCategory(item)}
      items={categories} icon="apps" placeholder="Category" />
      <AppTextInput icon="email" placeholder="email" />
    </Screen>
  );
}


