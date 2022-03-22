import { StyleSheet, Image } from "react-native";
import React,{useState,useContext} from "react";
import Screen from "../Components/Screen";
import * as Yup from 'yup';
import {Form,FormField,SubmitButton,ErrorMessage} from '../Components/forms';
import authApi from '../api/auth';
import jwtDecode from 'jwt-decode';
import AuthContext from "../auth/context";
import authStorage from '../auth/storage';


const validationSchema = Yup.object().shape({
    email : Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
})


export default function LoginScreen() {

  const authContext = useContext(AuthContext);

  const [loginFailed, setLoginFailed] = useState(false)
 
  const handleSubmit = async ({email,password}) => {
    const result = await authApi.login(email,password);
    console.log(result);
    if(!result.ok) {
      return setLoginFailed(true);
    }
    setLoginFailed(false);
    const user = jwtDecode(result.data);
    authContext.setUser(user);
    authStorage.storeToken(result.data);
  }

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />

      <Form
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      > 
      <ErrorMessage error="Invalid Email/password" visible={loginFailed} />
        <FormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              keyboardType="email-address"
              placeholder="Email"
             name="email"
              textContentType="emailAddress"
            />
            <FormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              placeholder="Password"
              secureTextEntry
              name="password"
              textContentType="password"
            />
            <SubmitButton title="Login"/>
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginBottom: 20,
    marginTop: 50,
  },
  container: {
    padding: 10,
  },
});
