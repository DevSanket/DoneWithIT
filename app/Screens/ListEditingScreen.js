import { StyleSheet, Text, View } from 'react-native'
import React,{useState,useEffect} from 'react'
import * as Yup from "yup";
import { Form,FormField as FormField,SubmitButton,FormPicker as Picker } from '../Components/forms';

import Screen from '../Components/Screen';
import CategoryPickerItem from '../Components/CategoryPickerItem';
import FormImagePicker from '../Components/forms/FormImagePicker';
import useLocation from '../Hooks/useLocation';


const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price:Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category"),
    images : Yup.array().min(1,"Please Select Atleast on Image")
});

const categories = [
    {
        backgroundColor: "#fc5c65",
        icon: "floor-lamp",
        label: "Furniture",
        value: 1,
      },
      {
        backgroundColor: "#fd9644",
        icon: "car",
        label: "Cars",
        value: 2,
      },
      {
        backgroundColor: "#fed330",
        icon: "camera",
        label: "Cameras",
        value: 3,
      },
      {
        backgroundColor: "#26de81",
        icon: "cards",
        label: "Games",
        value: 4,
      },
      {
        backgroundColor: "#2bcbba",
        icon: "shoe-heel",
        label: "Clothing",
        value: 5,
      },
      {
        backgroundColor: "#45aaf2",
        icon: "basketball",
        label: "Sports",
        value: 6,
      },
      {
        backgroundColor: "#4b7bec",
        icon: "headphones",
        label: "Movies & Music",
        value: 7,
      },
      {
        backgroundColor: "#a55eea",
        icon: "book-open-variant",
        label: "Books",
        value: 8,
      },
      {
        backgroundColor: "#778ca3",
        icon: "application",
        label: "Other",
        value: 9,
      },
]

export default function ListEditingScreen() {

 const location =  useLocation();
  
  return (
    <Screen style={styles.container}>
        <Form
        initialValues={{
            images:[],
            title:"",
            price:'',
            description:"",
            category:null,
            
        }}
        onSubmit={(values) => console.log(location)}
        validationSchema={validationSchema}
        >
          <FormImagePicker name="images" />

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
                    width={120}
            />
            <Picker 
                items={categories}
                name="category"
                placeholder="Category"
                PickerItemComponent={CategoryPickerItem}
                width="50%"
                numberOfColumns={3}
            /> 
            <FormField 
            maxLength={255}
            multiline
            name="description"
            numberOfLines={3}
            placeholder="Description"
            />
            <SubmitButton title="Post" />
            </Form>

    </Screen>
  )
}

const styles = StyleSheet.create({
    container:{
        padding:10
    }
})