import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as Yup from "yup";
import { AppForm,AppFormField as FormField,SubmitButton,AppFormPicker as Picker } from '../Components/forms';

import Screen from '../Components/Screen';

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price:Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category")
});

const categories = [
    {
        label:"Furniture",
        value:1
    },
    {
        label:"Clothing",
        value:2
    },
    {
        label:"Camera",
        value:3
    }
]

export default function ListEditingScreen() {
  return (
    <Screen style={styles.container}>
        <AppForm
        initialValues={{
            title:"",
            price:'',
            description:"",
            category:null
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
        >

            <FormField
            maxLength={255}
            name="title"
            placeholder="Title"
            />

            <FormField 
                    keyboardType="numeric"
                    maxLength={8}
                    name="price"
                    placeholder="Price"
            />
            <Picker 
                items={categories}
                name="category"
                placeholder="Category"
            /> 
            <FormField 
            maxLength={255}
            multiline
            name="description"
            numberOfLines={3}
            placeholder="Description"
            />
            <SubmitButton title="Post" />
            </AppForm>

    </Screen>
  )
}

const styles = StyleSheet.create({
    container:{
        padding:5
    }
})