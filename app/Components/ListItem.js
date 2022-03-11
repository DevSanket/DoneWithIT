import { StyleSheet, Text, View,Image,TouchableHighlight } from 'react-native'
import React from 'react'
import AppText from './AppText'
import colors from '../config/colors'
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function ListItem({title,subtitle,image,onPress,renderRightActions,IconComponent}) {
  return (
    <GestureHandlerRootView>
    <Swipeable renderRightActions={renderRightActions}>
    <TouchableHighlight
    underlayColor={colors.light}
    onPress={onPress}
    >
        <View style={styles.container}>
            {IconComponent}
       { image && <Image style={styles.image} source={image} />}
        <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subtitle && <AppText style={styles.subTitle}>{subtitle}</AppText>}
        </View>
    </View>
    </TouchableHighlight>
    </Swipeable>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
    container : {
        flexDirection :"row",
        padding:15,
        alignItems:'center',
        backgroundColor:colors.white
    },
    image:{
        width:70,
        height : 70,
        borderRadius : 35,
    },
    title:{
        fontWeight:"500",
    },
    subTitle:{
        color: colors.medium
    },
    detailsContainer:{
        marginLeft:10,
        justifyContent:"center"
    }
})