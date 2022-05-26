import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/Home';
import Splash from '../Screens/Splash';
import Signup from '../Screens/Signup';
import Search from '../Screens/Search';
import Product_details from '../Screens/Product_details';
import { Header_right_side_component } from '../Components/Header_components';
import { Header_left_side_component } from '../Components/Header_components';
const Stack = createNativeStackNavigator();
function AppRouter() {
  return (
    
    <NavigationContainer>


      <Stack.Navigator>

      

      <Stack.Screen 
          options={{
              
              headerTitle:'',
              headerStyle:{
                  backgroundColor:'whitesmoke'
              },
              headerShadowVisible:false
          }}
          name='Splash' component={Splash} />    
     
     <Stack.Screen
        
        options={{
          headerTitle:'Search',
          headerTitleAlign:'center',
          
        }}
        name='Search' component={Search} />
          


        <Stack.Screen
        options={{
            headerTitle: "",
            headerStyle:{
      
                
            },
            
            headerTitleStyle:{
                fontSize:15,
                fontWeight:'700'

            },
            headerLeft: () => (
              <Header_right_side_component/>
            ),
            headerRight: () => (
                <Header_left_side_component/>
              
              ),
    
          }} 
         name="Home" component={Home} />

<Stack.Screen 
          options={{
              
              headerTitle:'',
              headerStyle:{
                  backgroundColor:'whitesmoke'
              },
              headerShadowVisible:false
          }}
          name="Signup" component={Signup} />
          <Stack.Screen 
          options={{
              headerShown:false
          }}
          name="Product_details" component={Product_details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default AppRouter;