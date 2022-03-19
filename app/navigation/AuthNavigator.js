import { createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../Screens/LoginScreen';
import RegisterScreen from '../Screens/RegisterScreen';
import WelcomeScreen from '../Screens/WelcomeScreen';
import routes from './routes';

const Stack = createStackNavigator();

const AuthNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen
        options={{
            headerShown:false
        }}
        name={routes.WELCOME} component={WelcomeScreen} />
        <Stack.Screen name={routes.LOGIN} component={LoginScreen} />
        <Stack.Screen name={routes.REGISTER} component={RegisterScreen} />
    </Stack.Navigator>
)

export default AuthNavigator;