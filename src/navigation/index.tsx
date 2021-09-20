import React, {} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Hotels from '../screens/Hotels'


const RootStack = createStackNavigator();

export default () => (
    <NavigationContainer 
    >
    <RootStack.Navigator initialRouteName="Hotels" 

        screenOptions={{
          headerTintColor: '#F5F5F4',
          headerStyle: {
             backgroundColor: '#0B121A' ,
             shadowColor: 'transparent',
             elevation: 0,
        },
        headerBackTitle:' ',
      }}
        >             
        <RootStack.Screen name="Hotels" component={Hotels} 
        /> 
    
        </RootStack.Navigator>
        </NavigationContainer>
    );