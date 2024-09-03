import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather';
import { weatherCode } from '../utilities/WeatherCode';






const CurrentWeather = ({weatherData}) => {
    const { main: { temp, feels_like, temp_max, temp_min }, weather } = weatherData
  const weatherCondition = weather[0].main

    return (
        <SafeAreaView style={[styles.wrapper, {backgroundColor:weatherCode[weatherCondition].backgroundColor}]}>
           
            <View style={styles.container}>
            <Feather name={weatherCode[weatherCondition]?.icon} size={90} color="white" />
                <Text style={styles.temp}>{weatherData.main.temp}</Text>
                <Text style={styles.feels}>{`feels ${weatherData.main.feels_like}`}</Text>
                <View style={styles.highLowContainer}>
                    <Text style={styles.highLow}>{`high: ${weatherData.main.temp_max}`}</Text>
                    <Text style={styles.highLow}>{`low: ${weatherData.main.temp_min}`}</Text>
                </View>
            </View>
            <View style={styles.bodyWrapper}>
                <Text style={styles.description} >{`its ${weatherCode[weatherCondition].icon}`}</Text>
                <Text style={styles.message}>{weatherCode[weatherCondition].message}</Text>
            </View>
        </SafeAreaView>
    )
}

export default CurrentWeather;

const styles = StyleSheet.create({
    // eslint-disable-next-line react-native/no-unused-styles, react-native/no-color-literals
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent:"center",
        marginTop: 50,
       
        flex: 1
    },
    // eslint-disable-next-line react-native/no-color-literals
    temp: {
        color: 'black',
        fontSize: 48
    },
    // eslint-disable-next-line react-native/no-color-literals
    feels: {
        color: 'black',
        fontSize: 30
    },
    // eslint-disable-next-line react-native/no-color-literals
    highLow: {
        color: 'black',
        fontSize: 24
    },

    highLowContainer: {
        flexDirection: "row",
        gap: 10
    },
    description: {
        fontSize: 48
    }, 
    message: {
        fontSize:32
    },
    bodyWrapper:{
        alignItems:"center",
        justifyContent:"flex-end",
        paddingLeft:25,
        marginBottom:40

    },
    // eslint-disable-next-line react-native/no-color-literals

    // eslint-disable-next-line react-native/no-unused-styles, react-native/no-color-literals
    wrapper: {
        backgroundColor: "pink",
        flex: 1
    }
})