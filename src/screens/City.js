/* eslint-disable react-native/no-color-literals */
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import Icontext from '../components/Icontext';
import moment from 'moment';

const City = ({ weatherData }) => {
    const { name, country, population, sunrise, sunset } = weatherData
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.imagelayout} source={require("../../assets/city_background.jpg")}>
                <View style={styles.cityWrapper}>
                    <Text style={styles.cityName}>{name}</Text>
                    <Text style={styles.countryName}>{country}</Text>
                </View>
                <View style={[styles.populationWrapper, styles.cityWrapper]}>
                    <Icontext name="user" size={60} color="red" bodyText={population} bodyStyles={styles.population} />

                </View>
                <View style={styles.riseWrapper}>
                    <Icontext name="sunrise" size={40} color="white" bodyText={moment(sunrise).format('h:mm:ss a')} bodyStyles={styles.riseText} />
                    <Icontext name="sunset" size={40} color="white" bodyText={moment(sunset).format('h:mm:ss a')} bodyStyles={styles.riseText} />


                </View>
            </ImageBackground>
        </View>
    )
}

export default City

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imagelayout: {
        flex: 1
    },
    cityWrapper: {
        marginTop: 30,
        justifyContent: "center",
        alignItems: "center",


        // backgroundColor:"blue"

    },
    cityName: {
        fontSize: 40,
        fontWeight: "bold"
    },
    countryName: {
        fontSize: 30,
        fontWeight: "bold"
    },
    populationWrapper: {
        flexDirection: "row",
        gap: 20
    },
    population: {
        fontSize: 30,
        color: "red",

    },
    riseWrapper: {
        marginTop: 40,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    riseText: {
        fontSize: 20,
        color: "white"
    }
})