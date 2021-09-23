import React, { } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Hotels from '../screens/Hotels'
import HotelDetails from '../screens/HotelDetails'
import colors from '@palette';


const RootStack = createStackNavigator();

export default () => (
  <NavigationContainer>
    <RootStack.Navigator initialRouteName="Hotels"

      screenOptions={{
        headerTintColor: colors.secondary,
        headerStyle: {
          backgroundColor: colors.primary,
          shadowColor: 'transparent',
          elevation: 0,
        },
        headerBackTitle: ' ',
      }}
    >
      <RootStack.Screen name="Hotels" component={Hotels} />
      <RootStack.Screen name="HotelDetails" options={{title:""}} component={HotelDetails} />

    </RootStack.Navigator>
  </NavigationContainer>
);