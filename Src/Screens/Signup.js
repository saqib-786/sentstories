import React from 'react'
import{View,Text,StyleSheet,TouchableOpacity,Image} from 'react-native';
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import ResponsiveImage from 'react-native-responsive-image';



function Signup() {
  return (
    <>
    <View style={style.container}>
      <View style={style.box_1}>
        
      <ResponsiveImage
        source={require('../../Assets/sentStories.png')}
        initHeight="100"
        initWidth="350"
        resizeMode='contain'
        />
      </View>

      <View style={style.box_2}>
        <TouchableOpacity style={style.btn}>
          <ResponsiveImage initHeight='25' initWidth="25" style={{marginRight:10}} source={require('../../Assets/facebook-icon.png')}/>
          <Text style={style.btn_text}>Login with Facebook</Text>
        </TouchableOpacity>

        <Text style={{color:'gray',marginTop:50,fontSize:responsiveScreenFontSize(2.5)}}>OR</Text>

        <TouchableOpacity style={style.Signup_btn}>
          <Text style={style.text_2}>Signup</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.btn_2}>
          <Text style={{fontSize:responsiveScreenFontSize(2.2),color:'white'}}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity>
        <Text style={{color:'gray',fontSize:responsiveScreenFontSize(1.8),marginTop:20}}>Continue as Guest</Text>
        </TouchableOpacity>

      </View>

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
    box_1:{
      flex:1,
      justifyContent:'center'
    },
    box_2:{
      flex:1,
      alignItems:'center'
    },
    btn:{
      backgroundColor:'#0B86EE',
      width:responsiveScreenWidth(80),
      height:responsiveScreenHeight(6),
      borderRadius:2,
      justifyContent:'center',
      alignItems:'center',
      flexDirection: 'row',
      marginTop:40

    },
    btn_text:{
      color:'white',
      fontSize:responsiveScreenFontSize(2),
      fontWeight:'700'
    },
    text_2:{
      color:'black',
      fontSize:responsiveScreenFontSize(2),
      fontWeight:'700',
    },
    Signup_btn:{
      marginTop:30,
      width:responsiveScreenWidth(80),
      borderTopWidth:1,
      borderBottomWidth:1,
      borderRightWidth:1,
      borderLeftWidth:1,
      justifyContent:'center',
      alignItems:'center',
      height:responsiveScreenHeight(6),
      borderRadius:5,
      backgroundColor:'whitesmoke',
      shadowColor: "#000",

shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
    },
    btn_2:{
      width:responsiveScreenWidth(80),
      height:responsiveScreenHeight(6),
      backgroundColor:'black',
      marginTop:15,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:5
    }
})

export default Signup