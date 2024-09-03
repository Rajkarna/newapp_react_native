/* eslint-disable react-native/no-unused-styles */
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/components/Tabs';
import Counter from './src/demonstration/Counter';
import { useWeather } from './src/hooks/useWeather';
import ErrorItem from './src/screens/ErrorItem';





const App = () => {

    

    const [loading, weather, errorMsg]  = useWeather()
  

    if (weather && weather.list && !loading) {
        return (
          <NavigationContainer>
            <Tabs weather={weather} />
          </NavigationContainer>
        )
      }
    

      return (
        <View style={styles.container}>
          {errorMsg ? (
            <ErrorItem />
          ) : (
            <ActivityIndicator size={'large'} color={'blue'} />
          )}
        </View>
      )

   
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1
      }
})

export default App

