import React, {useRef} from 'react';
import {View,Text,StyleSheet,TextInput} from 'react-native';
import { responsiveScreenFontSize } from 'react-native-responsive-dimensions';


function Search() {
   
  return (
    <>
    <View style={style.container}>
        <View style={style.box_1}>
            <TextInput ref={searchValue} autoFocus={true} style={style.search_bar} placeholderTextColor={'gray'} placeholder='Search products by name' />

        </View>
        <View style={style.box_2}>
            <Text style={{color:'gray',fontSize:responsiveScreenFontSize(2)}}>Type to search products</Text>

        </View>
    </View>
    
    </>
  )
}

const style = StyleSheet.create({
    container:{
        flex:1
    },
    box_1:{
        justifyContent:'center',
        alignItems:'center'
    },
    search_bar:{
        width:'90%',
        backgroundColor:'lightgray',
        margin:10,
        borderRadius:5,
        padding:5
    },
    box_2:{
        flex:2,
        backgroundColor:'lightgray',
        justifyContent:'center',
        alignItems:"center"
    }
})

export default Search