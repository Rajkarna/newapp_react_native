import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CurrentWeather from '../screens/CurrentWeather'
import UpcomingWeather from '../screens/UpcomingWeather'
import City from '../screens/City'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from '@expo/vector-icons/Feather';

const Tabs = ({weather}) => {
    const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator 
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
      
                  if (route.name === 'Current') { 
                    iconName = focused ? 'droplet' : 'droplet';
                  } else if (route.name === 'Upcoming') {
                    iconName = focused ? 'clock' : 'clock';
                  }else if (route.name === 'City') {
                    iconName = focused ? 'home' : 'home';
                  }
      
                  return <Feather name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
                headerTitleAlign: 'center',
                tabBarStyle:{
                    backgroundColor:"lightblue"
                },
                headerStyle:{
                    
                    backgroundColor:"lightblue"
                },
                headerTitleStyle:{
                    fontWeight:"bold",
                    color:"tomato",
                    fontSize:25

                }
              })}>
                <Tab.Screen name="Current">
                {() => <CurrentWeather weatherData={weather.list[0]} />}
                </Tab.Screen>
                <Tab.Screen name="Upcoming">
                {() => <UpcomingWeather weatherData={weather.list} />}
                </Tab.Screen>
                <Tab.Screen name="City">
                {() => <City weatherData={weather.city} />}
                </Tab.Screen>
            </Tab.Navigator>
  )
}

export default Tabs

const styles = StyleSheet.create({})