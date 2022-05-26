import React from 'react';
import {View,Text,StyleSheet,Image,ScrollView,TouchableOpacity} from 'react-native';
import ResponsiveImage from 'react-native-responsive-image';
import { responsiveScreenFontSize } from 'react-native-responsive-dimensions';

function Slider() {
  return (
    <>
    <View style={style.container}>
    <ScrollView horizontal={true}>
       <View style={style.box}>
           
       <TouchableOpacity style={{alignItems:'center', }}>
      

          <Image
          style={style.img}
          source={require('../../Assets/secent_stories.png')}
          
          />
        <Text style={style.text}>All Products</Text>

        </TouchableOpacity>

        <TouchableOpacity style={{alignItems:'center', }}>
      

          <Image
          style={style.img}
          source={require('../../Assets/Men.jpg')}
          
          />
        <Text style={style.text}>Men</Text>

        </TouchableOpacity>



        <TouchableOpacity style={{alignItems:'center', }}>
      

          <Image
          style={style.img}
          source={require('../../Assets/women.png')}
          
          />
        <Text style={style.text}>Women</Text>

        </TouchableOpacity>


        <TouchableOpacity style={{alignItems:'center', }}>
      

          <Image
          style={style.img}
          source={require('../../Assets/unisex.jpg')}
          
          />
        <Text style={style.text}>Unisex</Text>

        </TouchableOpacity>


        <TouchableOpacity style={{alignItems:'center', }}>
      

          <Image
          style={style.img}
          source={require('../../Assets/tester.jpg')}
          
          />
        <Text style={style.text}>Testers</Text>

        </TouchableOpacity>


        <TouchableOpacity style={{alignItems:'center', }}>
      

          <Image
          style={style.img}
          source={require('../../Assets/woody.jpg')}
          
          />
        <Text style={style.text}>Woody</Text>

        </TouchableOpacity>


        <TouchableOpacity style={{alignItems:'center', }}>
      

          <Image
          style={style.img}
          source={require('../../Assets/Eastern.jpg')}
          
          />
        <Text style={style.text}>Eastern</Text>

        </TouchableOpacity>


        <TouchableOpacity style={{alignItems:'center', }}>
      

          <Image
          style={style.img}
          source={require('../../Assets/westren.jpg')}
          
          />
        <Text style={style.text}>Westren</Text>

        </TouchableOpacity>


        <TouchableOpacity style={{alignItems:'center', }}>
      

          <Image
          style={style.img}
          source={require('../../Assets/floral.jpg')}
          
          />
        <Text style={style.text}>Floral</Text>

        </TouchableOpacity>

        <TouchableOpacity style={{alignItems:'center', }}>
      

          <Image
          style={style.img}
          source={require('../../Assets/fresh.jpg')}
          
          />
        <Text style={style.text}>Fresh</Text>

        </TouchableOpacity>


        <TouchableOpacity style={{alignItems:'center', }}>
      

          <Image
          style={style.img}
          source={require('../../Assets/oriental.jpg')}
          
          />
        <Text style={style.text}>Oriental</Text>

        </TouchableOpacity>

       </View>

      </ScrollView>
    </View>

    </>
  )
}
const style = StyleSheet.create({
    container:{
        flex:1,
    },
    box:{
        margin:15,
        flexDirection:'row'
        

    },
    img:{
        width: 70,
        height:70,
        borderRadius:50,
        margin:5
        
    },
    text:{
      marginTop:5,
      color:'black',
      fontSize:responsiveScreenFontSize(1.5)
    }
})

export default Slider