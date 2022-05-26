import React from 'react'
import {Text,View,StyleSheet} from 'react-native';
import ResponsiveImage from 'react-native-responsive-image';
import { useEffect } from 'react';
import { symbolicateLogLazy } from 'react-native/Libraries/LogBox/Data/LogBoxData';



function Splash({navigation}) {
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('Home')
    
    
        },3000)
    })
  return (
    <>
    <View style={style.container}>
        < ResponsiveImage
      style={style.logo}   source={(require('../../Assets/sentStories.png'))}
        initHeight="80"
        initWidth="350"
        />

    </View>
    </>
  )
}
const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    logo:{
        resizeMode:'contain'
    }
})

export default Splash