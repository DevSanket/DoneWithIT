import * as SecureStore from 'expo-secure-store';
import jwtDecode from 'jwt-decode';

const key="authToken";

const storeToken = async (authToken) => {
    try {
        await SecureStore.setItemAsync(key,authToken);
    } catch (error) {
        console.log("Error Storing auth token",error);
    }
}

const getToken = async () => {
    try {
       return await SecureStore.getItemAsync(key);
    } catch (error) {
        console.log("Error Getting Auth Token",error);
    }
}

const getUser = async () => {
    const token = await getToken();
    return (token) ? jwtDecode(token) : null;
}

const removeToken = async () => {
    try {
        
        await SecureStore.deleteItemAsync(key);
    } catch (error) {
        console.log("Error while Deleting User",error);
    }
}


export default {
    getUser,
    storeToken,
    removeToken,
    getToken
}