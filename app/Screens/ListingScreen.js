import { StyleSheet,FlatList } from 'react-native'
import React from 'react'
import Screen from '../Components/Screen'
import Card from '../Components/Card';
import colors from '../config/colors';

const listings = [
    {
        id:1,
        title:'Red jacket for sale',
        price:100,
        image: require('../assets/jacket.jpg')
    },
    {
      id:2,
      title:'Couch in great Condition',
      price:1000,
      image: require('../assets/couch.jpg')
  }
];

export default function ListingScreen() {
  return (
    <Screen>
        <FlatList 
         data={listings}
         keyExtractor={listing => listing.id.toString()}
         renderItem={({item}) => 
            <Card 
              title={item.title}
              subtitle={"$" + item.price}
              image={item.image}
            />
          }
        />
    </Screen>
  )
}

const styles = StyleSheet.create({
})