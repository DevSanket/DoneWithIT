import { StyleSheet, Text, View,FlatList,Platform,Button,TouchableWithoutFeedback,Modal } from 'react-native'
import React,{useState} from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import defaultStyle from '../config/styles';
import AppText from './AppText';
import Screen from './Screen';
import PickerItem from './PickerItem';


export default function AppPicker({icon,items,placeholder,onSelectItem,selectedItem}) {
  const [modalVisible,setModalVisible] = useState(false); 
  return (
   <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
    <View style={styles.container}>
      {icon && <MaterialCommunityIcons
       name={icon} 
       size={20} color={defaultStyle.colors.medium} style={styles.icon}/>}

     <AppText style={styles.text}>{selectedItem ? selectedItem.label : placeholder}</AppText>
     <MaterialCommunityIcons
       name="chevron-down" 
       size={20} color={defaultStyle.colors.medium} />
    </View>
    </TouchableWithoutFeedback>
    <Modal visible={modalVisible} animationType="slide">
      <Screen>
      <Button title="Close" onPress={() => setModalVisible(false)}/>
      <FlatList 
        data={items}
        keyExtractor={item => item.value.toString()}
        renderItem={({item}) => <PickerItem label={item.label}
        onPress={() => {    
            setModalVisible(false);
            onSelectItem(item);
        }}
        />}
      />
      </Screen>
    </Modal>
   </>
  )
}

const styles = StyleSheet.create({
    container :{
        backgroundColor : defaultStyle.colors.light,
        borderRadius:25,
        flexDirection : "row",
        width:'100%',
        padding:15,
        marginVertical:10
    },
    icon:{
        marginRight:10
    },
    text:{
        flex:1
    }
})