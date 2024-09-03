/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-unused-styles */
import { StyleSheet, FlatList, Text, View, SafeAreaView, ImageBackground } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import ListItem from '../components/ListItem';



const UpcomingWeather = ({weatherData}) => {
    const {container,image} = styles
    return (

        <SafeAreaView style={container}>
            <ImageBackground style={image} source={require("../../assets/upcoming_background.jpg")}>
        
            <FlatList
                data={weatherData}
                renderItem={({ item }) => <ListItem 
                    condition={item.weather[0].main}
                    dt_txt={item.dt_txt}
                    min={item.main.temp_min} 
                    max={item.main.temp_max} 
                    keyExtractor={item => item.dt_txt}/>}
            />
            </ImageBackground>
        </SafeAreaView>

    )
}

export default UpcomingWeather

const styles = StyleSheet.create({
    container: {
        
        flex: 1,
        marginTop:StatusBar.currentHeight || 0,
        backgroundColor:"red"
    },
    top: {
        marginTop: 30,
        fontSize: 40
    },
    
    image:{
        flex:1
    }
})