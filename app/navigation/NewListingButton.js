import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import {MaterialCommunityIcons} from '@expo/vector-icons'

export default function NewListingButton({onPress}) {
  return (
   <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
        <MaterialCommunityIcons name='plus-circle' color={colors.white}
        size={30}
        />
    </View>
   </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor:colors.primary,
        borderRadius:40,
        borderColor:colors.white,
        borderWidth:10,
        bottom:40,
        height:80,
        width:80,
        alignItems:'center',
        justifyContent:'center'
        
}

})