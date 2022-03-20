import { StyleSheet, Text,Image, View,TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import AppText from './AppText';


export default function Card({title,subtitle,imageUrl,onPress}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
      <Image
      style={styles.image} 
      source={{uri:imageUrl}}
      />
      <View style={styles.detailsContainer}>
      <AppText style={styles.title}>{title}</AppText>
      <AppText style={styles.subtitle}>{subtitle}</AppText>
      </View>
    </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
    card :{
        borderRadius:15,
        backgroundColor :colors.white,
        margin : 20,
        elevation:10,
        overflow:'hidden'
    },
    image:{
        width:"100%",
        height: 200
    },
    detailsContainer:{
        padding:20
    },
    title:{
        marginBottom : 7
    },
    subtitle:{
        color:colors.secondary,
        fontWeight:'bold'
    }
})