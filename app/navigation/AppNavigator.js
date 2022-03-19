import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListEditingScreen from "../Screens/ListEditingScreen";
import AccountNavigator from "./AccountNavigator";
import FeedNavigator from "./FeedNavigator";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import NewListingButton from "./NewListingButton";
import routes from "./routes";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
    <Tab.Navigator screenOptions={{headerShown:false}}>
        <Tab.Screen name={routes.FEED} component={FeedNavigator}
        options={{
            tabBarIcon: ({color,size}) => 
            <MaterialCommunityIcons name={routes.HOME} color={color} size={size} />
        }}
        />
        <Tab.Screen name={routes.LISTING_EDIT} component={ListEditingScreen} options={({navigation}) => ({
            tabBarButton:() => <NewListingButton onPress={() => navigation.navigate(routes.LISTING_EDIT)} />
        })}/>
        <Tab.Screen name={routes.ACCOUNT_PAGE} component={AccountNavigator}
        options={{
            tabBarIcon: ({color,size}) => 
            <MaterialCommunityIcons name="account" color={color} size={size} />
        }}
        />
    </Tab.Navigator>
);


export default AppNavigator;