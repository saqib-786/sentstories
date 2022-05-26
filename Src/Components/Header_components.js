import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Image} from 'react-native';
import { responsiveScreenWidth,responsiveScreenFontSize } from 'react-native-responsive-dimensions';
import ResponsiveImage from 'react-native-responsive-image';


function Header_right_side_component({navigation}) {
    const product_value=(data) =>{
        if(data == 'Product_1'){
            navigation.navigate('Product_details')

        }
    }
  return (
    <>
    <View>

    <TouchableOpacity  style={style.btn}>
    <Text style={{fontSize:responsiveScreenFontSize(2), color:'black',fontWeight:'700'}}>SELECTED LOCATION</Text>
    <Image resizeMode='contain' style={style.arrow_icon} source={require('../../Assets/arrow-icon.png')} />
    </TouchableOpacity>

    </View>
    </>
  )
}


function Header_left_side_component({navigation}){
    const go_to_signup = () =>{
        navigation.navigate('Signup');
    }
    return(
        <>
    <View>
    <View style={style.container}>
                   <TouchableOpacity onPress={()=>alert('Under Procese')}>
                   <ResponsiveImage
                   source={require('../../Assets/mignifire-icon.png')}
                   initHeight="25"
                   initWidth="25"
                   />

                   </TouchableOpacity>
                   <TouchableOpacity onPress={()=> alert('Under Process')} >
                   <ResponsiveImage source={require('../../Assets/heart-icon.png')} 
                   initHeight="25"
                   initWidth="25"
                   />

                   </TouchableOpacity>
                   <TouchableOpacity onPress={()=>navigation.navigate('Signup')} >
                   <ResponsiveImage
                   source={require('../../Assets/user-icon.png')}
                   initHeight='25'
                   initWidth='25'
                   />

                   </TouchableOpacity>
               </View>
    </View>
    </>
    )

}
const style = StyleSheet.create({
    container:{
        flexDirection:'row',
        width:responsiveScreenWidth(35),
        justifyContent:'space-around'
    
    },
    arrow_icon:{
        width:13,
        height:13,
        marginLeft:2,
        marginTop:1
    },
    btn:{
        flexDirection:'row',
        alignItems:'center'

    },
    icon:{
        width:25,
        height:25,
        margin:10
    },
    btn_1:{
        justifyContent:'center',
        alignItems:'center'
    }
})
export {
    Header_right_side_component,
    Header_left_side_component
}