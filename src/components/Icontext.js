/* eslint-disable react-native/no-unused-styles */
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather';


const Icontext = (props) => {
    const {name, size, color, bodyStyles, bodyText} = props;
  return (
    <View style={styles.container}>
     <Feather name={name} size={size} color={color}/>
     <Text style={[styles.textTheme, bodyStyles]}>{bodyText}</Text>
    </View>
  )
}

export default Icontext

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        flexDirection:"row",
        gap:20
    },
    textTheme:{
        fontWeight:"bold"
    }
})