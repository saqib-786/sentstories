import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Image} from 'react-native';
import { responsiveScreenFontSize } from 'react-native-responsive-dimensions';
import ResponsiveImage from 'react-native-responsive-image';

function Cards({navigation},props) {
    const products_details = ()=>{
        navigation.push('Product_details');
        
    }
  return (
    <>
    {/* Cards row start */}
    <View style={style.container}>
        <View style={style.card}>
        
        <TouchableOpacity onPress={()=>console.log(props)}>
            <View style={style.box_1}>
            <Image style={style.img} source={require('../../Assets/Product_1.jpg')}/>

            </View>
            <View style={style.box_2}>
            <Text style={style.text}>Catch 22 - Our Inpression of Creed.</Text>
            <Text style={style.text_2}>Catch 22 opens with a moderate Projection</Text>

            <View style={style.btn}>
                <Text style={{fontSize:responsiveScreenFontSize(2)}}>Rs:1,290.00</Text>
            </View>

            <View style={style.btn_2}>
                <Text style={{fontSize:responsiveScreenFontSize(2),fontWeight:'500'}}>ADD</Text>
                <Image resizeMode='contain' style={{width:20,height:25,marginLeft:4}} source={require('../../Assets/cart.png')}/>
            </View>


            </View>
            </TouchableOpacity>
            
        </View>



        
        <View style={style.card}>

            <TouchableOpacity>
                <View style={style.box_1}>
            <Image  style={style.img} source={require('../../Assets/Product_2.jpg')}/>

                </View>
                <View style={style.box_2}>
                    <Text style={style.text}>Tipping Point - Our Impression of Bleu</Text>
                    <Text style={style.text_2}>Notes of Potent ginger,cool mint, spicy </Text>
                    <View style={style.btn}>
                <Text style={{fontSize:responsiveScreenFontSize(2)}}>Rs:1,290.00</Text>
            </View>
            
            <View style={style.btn_2}>
                <Text style={{fontSize:responsiveScreenFontSize(2),fontWeight:'500'}}>ADD</Text>
                <Image resizeMode='contain' style={{width:20,height:25,marginLeft:4}} source={require('../../Assets/cart.png')}/>
            </View>
                
                </View>
            </TouchableOpacity>
        </View>
        


        

    </View>

    {/* Cards row ends */}

    <Text style={{fontSize:responsiveScreenFontSize(2),fontWeight:'700',color:'black',margin:10}}>100% Concentrated Perfume Oils</Text>

    <View style={style.container}>
        <View style={style.card}>
        
        <TouchableOpacity>
            <View style={style.box_1}>
            <Image style={style.img} source={require('../../Assets/Product_3.jpg')}/>

            </View>
            <View style={style.box_2}>
            <Text style={style.text}>Catch 22 - Our Inpression of Creed.</Text>
            <Text style={style.text_2}>Catch 22 opens with a moderate Projection</Text>

            <View style={style.btn}>
                <Text style={{fontSize:responsiveScreenFontSize(2)}}>Rs:1,290.00</Text>
            </View>

            <View style={style.btn_2}>
                <Text style={{fontSize:responsiveScreenFontSize(2),fontWeight:'500'}}>ADD</Text>
                <Image resizeMode='contain' style={{width:20,height:25,marginLeft:4}} source={require('../../Assets/cart.png')}/>
            </View>


            </View>
            </TouchableOpacity>
            
        </View>



        
        <View style={style.card}>

            <TouchableOpacity>
                <View style={style.box_1}>
            <Image  style={style.img} source={require('../../Assets/Product_4.jpg')}/>

                </View>
                <View style={style.box_2}>
                    <Text style={style.text}>Tipping Point - Our Impression of Bleu</Text>
                    <Text style={style.text_2}>Notes of Potent ginger,cool mint, spicy </Text>
                    <View style={style.btn}>
                <Text style={{fontSize:responsiveScreenFontSize(2)}}>Rs:1,290.00</Text>
            </View>
            
            <View style={style.btn_2}>
                <Text style={{fontSize:responsiveScreenFontSize(2),fontWeight:'500'}}>ADD</Text>
                <Image resizeMode='contain' style={{width:20,height:25,marginLeft:4}} source={require('../../Assets/cart.png')}/>
            </View>
                
                </View>
            </TouchableOpacity>
        </View>
        


        

    </View>

{/* Cards ends here */}
<Text style={{color:'black',fontSize:responsiveScreenFontSize(2),fontWeight:'700',margin:10}}>New Arrival</Text>
<View style={style.container}>
        <View style={style.card}>
        
        <TouchableOpacity>
            <View style={style.box_1}>
            <Image style={style.img} source={require('../../Assets/Product_5.jpg')}/>

            </View>
            <View style={style.box_2}>
            <Text style={style.text}>Unsiyat (Extrait De Parfum) </Text>
            <Text style={style.text_2}>Unsiyat - Amber Floral Fragrance for Woman</Text>

            <View style={style.btn}>
                <Text style={{fontSize:responsiveScreenFontSize(2)}}>Rs:1,290.00</Text>
            </View>

            <View style={style.btn_2}>
                <Text style={{fontSize:responsiveScreenFontSize(2),fontWeight:'500'}}>ADD</Text>
                <Image resizeMode='contain' style={{width:20,height:25,marginLeft:4}} source={require('../../Assets/cart.png')}/>
            </View>


            </View>
            </TouchableOpacity>
            
        </View>



        
        <View style={style.card}>

            <TouchableOpacity>
                <View style={style.box_1}>
            <Image  style={style.img} source={require('../../Assets/Product_6.jpg')}/>

                </View>
                <View style={style.box_2}>
                    <Text style={style.text}>Junoon (Eau De Parfum)</Text>
                    <Text style={style.text_2}>Junoon is unisex gragrance with its top n. </Text>
                    <View style={style.btn}>
                <Text style={{fontSize:responsiveScreenFontSize(2)}}>Rs:1,290.00</Text>
            </View>
            
            <View style={style.btn_2}>
                <Text style={{fontSize:responsiveScreenFontSize(2),fontWeight:'500'}}>ADD</Text>
                <Image resizeMode='contain' style={{width:20,height:25,marginLeft:4}} source={require('../../Assets/cart.png')}/>
            </View>
                
                </View>
            </TouchableOpacity>
        </View>
        
    </View>

    {/* Cards ends here */}

    <Text style={{color:'black',fontSize:responsiveScreenFontSize(2),margin:10,fontWeight:'700'}}>Most Underrated Fragrancess</Text>
    <View style={style.container}>
        <View style={style.card}>
        
        <TouchableOpacity>
            <View style={style.box_1}>
            <Image style={style.img} source={require('../../Assets/Product_7.jpg')}/>

            </View>
            <View style={style.box_2}>
            <Text style={style.text}>Street of Cairo - Our Impression of Rasas...</Text>
            <Text style={style.text_2}>Street of Cairo Opens with a modreate proj..</Text>

            <View style={style.btn}>
                <Text style={{fontSize:responsiveScreenFontSize(2)}}>Rs:1,290.00</Text>
            </View>

            <View style={style.btn_2}>
                <Text style={{fontSize:responsiveScreenFontSize(2),fontWeight:'500'}}>ADD</Text>
                <Image resizeMode='contain' style={{width:20,height:25,marginLeft:4}} source={require('../../Assets/cart.png')}/>
            </View>


            </View>
            </TouchableOpacity>
            
        </View>



        
        <View style={style.card}>

            <TouchableOpacity>
                <View style={style.box_1}>
            <Image  style={style.img} source={require('../../Assets/Product_8.jpg')}/>

                </View>
                <View style={style.box_2}>
                    <Text style={style.text}>Our Signature - Million Worlds (Perfume Spr....</Text>
                    <Text style={style.text_2}>The fragrance of a man who stands out from the. </Text>
                    <View style={style.btn}>
                <Text style={{fontSize:responsiveScreenFontSize(2)}}>Rs:1,290.00</Text>
            </View>
            
            <View style={style.btn_2}>
                <Text style={{fontSize:responsiveScreenFontSize(2),fontWeight:'500'}}>ADD</Text>
                <Image resizeMode='contain' style={{width:20,height:25,marginLeft:4}} source={require('../../Assets/cart.png')}/>
            </View>
                
                </View>
            </TouchableOpacity>
        </View>
    </View>
    {/* Cards ends here */}
    <Text style={{color:'black',fontSize:responsiveScreenFontSize(2),margin:10,fontWeight:'700'}}>Tester</Text>

    <View style={style.container}>
        <View style={style.card}>
        
        <TouchableOpacity>
            <View style={style.box_1}>
            <Image style={style.img} source={require('../../Assets/Product_9.jpg')}/>

            </View>
            <View style={style.box_2}>
            <Text style={style.text}>Top 5 Spray Sample Set For Men</Text>
            <Text style={style.text_2}>1.Our Impression of Creed Aventu 2.Our imp...</Text>

            <View style={style.btn}>
                <Text style={{fontSize:responsiveScreenFontSize(2)}}>Rs:1,290.00</Text>
            </View>

            <View style={style.btn_2}>
                <Text style={{fontSize:responsiveScreenFontSize(2),fontWeight:'500'}}>ADD</Text>
                <Image resizeMode='contain' style={{width:20,height:25,marginLeft:4}} source={require('../../Assets/cart.png')}/>
            </View>


            </View>
            </TouchableOpacity>
            
        </View>



        
        <View style={style.card}>

            <TouchableOpacity>
                <View style={style.box_1}>
            <Image  style={style.img} source={require('../../Assets/Product_10.jpg')}/>

                </View>
                <View style={style.box_2}>
                    <Text style={style.text}>Top 5 Spray Sample Set For Women</Text>
                    <Text style={style.text_2}>1.Our Impression of J'Adore 2. Our Imressio.. </Text>
                    <View style={style.btn}>
                <Text style={{fontSize:responsiveScreenFontSize(2)}}>Rs:1,290.00</Text>
            </View>
            
            <View style={style.btn_2}>
                <Text style={{fontSize:responsiveScreenFontSize(2),fontWeight:'500'}}>ADD</Text>
                <Image resizeMode='contain' style={{width:20,height:25,marginLeft:4}} source={require('../../Assets/cart.png')}/>
            </View>
                
                </View>
            </TouchableOpacity>
        </View>
        


        

    </View>

    </>
  )
}
const style = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        backgroundColor:'whitesmoke',
        
    },
    card:{
        width:'45%',
        margin:5,
        borderRadius:5,
        backgroundColor:'whitesmoke',
        shadowColor: "gray",
      shadowOffset: {
	 width: 0,
	 height: 2,
},
 shadowOpacity: 0.25,
 shadowRadius: 3.84,

elevation: 5,
     
      
        

    },
    box_1:{
        flex:1,
       
        
    
        
    
    },
    box_2:{
        flex:2,
        padding: 5,
        position:'relative',
        width: '100%',
       
    },
    text:{
        color:'black',
        fontSize:responsiveScreenFontSize(1.9),
        

    },
    text_2:{
        color:'gray',
        fontSize:responsiveScreenFontSize(1.8)
    },
    img:{
        position:'relative',
        width:'100%',
        height: 160,
        resizeMode:'cover',
        borderTopRightRadius:5,
        borderTopLeftRadius:5
    },
    btn:{
        backgroundColor:'#D54D4D',
        width:'60%',
        padding:3,
        marginTop:5,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
        
    },
    btn_2:{
        backgroundColor:'#333333',
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
        margin:10,
        width:'95%',
        borderRadius:5,
        alignSelf:'center',
        flexDirection:'row',
        

    }
})
export default Cards