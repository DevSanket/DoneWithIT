import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TextInput from '../TextInput'
import ErrorMessage from './ErrorMessage'
import { useFormikContext } from 'formik'

export default function AppFormField({name,width,...otherProps}) {
   const {setFieldTouched,setFieldValue,errors,touched,values} = useFormikContext();
  return (
    <>
            <TextInput
              onChangeText={(text) => setFieldValue(name,text)}
              value={values[name]}
              onBlur={() => setFieldTouched(name)}
              width={width}
              {...otherProps}
            />
             <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  )
}

const styles = StyleSheet.create({})