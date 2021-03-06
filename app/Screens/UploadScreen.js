import { StyleSheet, View,Modal } from 'react-native'
import React from 'react'
import Text from '../Components/AppText';
import * as Progress from 'react-native-progress';
import colors from '../config/colors';
import LottieView from 'lottie-react-native';



export default function UploadScreen({onDone,progress = 0,visible=false}) {
  return (
    <Modal visible={visible}>
        <View style={styles.container}>
            {
                progress > 1 ? 
               ( <Progress.Bar color={colors.primary} progress={progress} width={200}/>) :
                (<LottieView 
                    onAnimationFinish={onDone}
                    autoPlay loop={false} source={require('../assets/animations/done.json')} style={styles.animation} />)
            }
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    animation:{
        width:150
    }
})