import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ListingScreen from '../Screens/ListingScreen';
import ListingDetailsScreen from '../Screens/ListingDetailsScreen';
import routes from './routes';

const Stack = createStackNavigator();

const FeedNavigator = () => (
    <Stack.Navigator screenOptions={{
        presentation:'modal',
        headerShown:false
    }}>
        <Stack.Screen name={routes.LISTINGS} 
         component={ListingScreen} />
        <Stack.Screen name={routes.LISTINGS_DETAILS}
        component={ListingDetailsScreen}  />
    </Stack.Navigator>
)

export default FeedNavigator;