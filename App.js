import React,{useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';
import OfflineNotice from './app/Components/OfflineNotice';
import AuthNavigator from './app/navigation/AuthNavigator';
import AuthContext from './app/auth/context';
import authStore from './app/auth/storage';
import AppLoading from 'expo-app-loading';


export default function App() {
  const [user,setUser] = useState();
  const [isReady,setReady] = useState(false);
  const restoreUser = async () => {
    const user = await authStore.getUser();
    if(user) setUser(user);
  }

 if(!isReady){
   return <AppLoading onError={console.warn} startAsync={restoreUser} onFinish={() => setReady(true)} />
 }
  return (
    <AuthContext.Provider value={{user,setUser}}>
    <OfflineNotice />
    <NavigationContainer theme={navigationTheme}>
      {user ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
    </AuthContext.Provider>
    
  )     
}


