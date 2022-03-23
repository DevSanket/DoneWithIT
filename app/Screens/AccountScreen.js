import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import Screen from '../Components/Screen'
import ListItem from '../Components/ListItem'

import colors from '../config/colors'
import Icon from '../Components/Icon'
import ListItemSeparator from '../Components/ListItemSeparator'
import routes from '../navigation/routes'
import useAuth from '../auth/useAuth'

const menuItems = [
    {
        title:"My Listings",
        icon : {
            name : "format-list-bulleted",
            backgroundColor: colors.primary
        }
    },
    {
        title:"My Messages",
        icon : {
            name : "email",
            backgroundColor: colors.secondary
        },
        targetScreen : routes.MESSAGES
    }
];

export default function AccountScreen({navigation}) {
    const {user,logOut} = useAuth();
    
  return (
    <Screen style={styles.screen}>
        <View style={styles.container}>

        <ListItem 
            title={user.name}
            subtitle={user.email}
            image={require('../assets/mosh.jpg')}
        />
        </View>
        <View style={styles.container}>
             <FlatList 
              data={menuItems}
              ItemSeparatorComponent={ListItemSeparator}
              keyExtractor={menuItem => menuItem.title}
              renderItem={({item}) => 
                 <ListItem 
                    title={item.title}
                    IconComponent={
                        <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />
                    }
                    onPress={() => navigation.navigate(item.targetScreen)}
                 />
            
            }
             />   
        </View>
        <ListItem 
         title="Log Out"
         IconComponent={
             <Icon 
               name="logout" backgroundColor='#ffe66d'
             />
         }
         onPress={() => logOut()}
        />
    </Screen>
  )
}

const styles = StyleSheet.create({
    container :{
        marginVertical:20
    },
    screen:{
        backgroundColor:colors.light
    }
})