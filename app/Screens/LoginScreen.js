import { StyleSheet, Image } from "react-native";
import React from "react";
import Screen from "../Components/Screen";
import * as Yup from 'yup';
import {AppForm,AppFormField,SubmitButton} from '../Components/forms';

const validationSchema = Yup.object().shape({
    email : Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
})


export default function LoginScreen() {
 

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />

      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              keyboardType="email-address"
              placeholder="Email"
             name="email"
              textContentType="emailAddress"
            />
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              placeholder="Password"
              secureTextEntry
              name="password"
              textContentType="password"
            />
            <SubmitButton title="Login"/>
      </AppForm>
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
