import { StyleSheet, View,Image } from 'react-native'
import React from 'react'
import AppText from '../Components/AppText'
import colors from '../config/colors'
import ListItem from '../Components/ListItem'

export default function ListingDetailsScreen({route}) {
  const listing = route.params;

  console.log(listing);

  return (
    <View>
      <Image style={styles.image} source={{uri: listing.images[0].url}} />
        <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{listing.title}</AppText>
            <AppText style={styles.price}>${listing.price}</AppText>
           <View style={styles.userContainer}>
           <ListItem 
              image={require("../assets/mosh.jpg")}
              title="Mosh Hamedani"
              subtitle="5 Listings"
            />
           </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    image : {
        width:"100%",
        height:300
    },
    detailsContainer:{
        padding:20,
    },
    title:{
        fontSize: 24,
        fontWeight: "500"
    },
    price:{
        color: colors.secondary,
        fontWeight:'bold',
        fontSize: 20,
        marginVertical : 10
    },
    userContainer:{
        marginVertical:40
    }
})