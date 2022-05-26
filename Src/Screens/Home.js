import React from 'react'
import {View,Text,StyleSheet,ScrollView,TouchableOpacity,Image} from 'react-native';
import Slider from '../Components/Slider';
import Cards from '../Components/Cards';
import ResponsiveImage from 'react-native-responsive-image';
import { responsiveScreenFontSize, responsiveScreenHeight } from 'react-native-responsive-dimensions';


function Home() {
  return (
    <>
    <View style={style.container}>
    <ScrollView>
      <Slider/>
      <View style={{justifyContent:'center'}}>
      <Image
      style={{width:'100%',height:responsiveScreenHeight(20)}}
      source={require('../../Assets/Header.jpg')}
      />
      </View>
      <Text style={style.text}>Most Popular</Text>
      <View style={style.card_container}>
        <Cards/>

      </View>
      
    
    </ScrollView>
    </View>
    </>
  )
}

const style = StyleSheet.create({
container:{
  flex:1
},
img:{
  width:100,
  height:100,
  resizeMode:'contain'
},
card_container:{

},
text:{
  color:'black',
  margin:10,
  fontSize:responsiveScreenFontSize(2),
  fontWeight:'600'
}
})

export default Home