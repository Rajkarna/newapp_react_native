import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Counter = () => {
    let count = 0;
    return (
        <View style={styles.container}>
            <Text>Counter : {count}</Text>
            <Button color={"red"} title='increment' onPress={() => {
                count++
                console.log(count)
            }} />
            <Button color={"blue"} title='decrement' onPress={() => count--} />

        </View>
    )
}

export default Counter

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        flex: 1,
        // justifyContent:"center",
        alignItems: "center"
    }
})