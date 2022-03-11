import { StyleSheet, Text, View,TextInput,Platform } from 'react-native'
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';
import defaultStyle from '../config/styles';
import AppText from './AppText';


export default function AppPicker({icon,placeholder,...otherProps}) {
  return (
    <View style={styles.container}>
      {icon && <MaterialCommunityIcons
       name={icon} 
       size={20} color={defaultStyle.colors.medium} style={styles.icon}/>}

     <AppText style={styles.text}>{placeholder}</AppText>
     <MaterialCommunityIcons
       name="chevron-down" 
       size={20} color={defaultStyle.colors.medium} />
    </View>
  )
}

const styles = StyleSheet.create({
    container :{
        backgroundColor : defaultStyle.colors.light,
        borderRadius:25,
        flexDirection : "row",
        width:'100%',
        padding:15,
        marginVertical:10
    },
    icon:{
        marginRight:10
    },
    text:{
        flex:1
    }
})