import React from 'react';
import {Image,StyleSheet,View} from 'react-native';
import colors from '../config/colors';
import {MaterialCommunityIcons} from '@expo/vector-icons'

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}>
                <MaterialCommunityIcons name='close' color="white" size={30} />
            </View>
            <View style={styles.DeleteIcon}>
            <MaterialCommunityIcons name='trash-can-outline' color="white" size={30} /></View>
            <Image 
            resizeMode='contain'
            style={styles.image}
            source={require("../assets/chair.jpg")}
        />
        </View>
    );
}

const styles = StyleSheet.create({
    closeIcon : {
        position:"absolute",
        top:30,
        left:30
    },
    DeleteIcon:{
        position:"absolute",
        top:30,
        right:30
    },
    container:{
        backgroundColor:colors.black,
        flex:1
    },  
    image:{
        top:35,
        width:"100%",
        height:"100%"
    }
})

export default ViewImageScreen;