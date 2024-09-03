import { useEffect, useState } from "react";
import * as Location from 'expo-location';
import { WEATHER_API_KEY } from '@env'

export const useWeather = () => {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(true);
    const [weather, setWeather] = useState([]);
    const [lat, setLat] = useState(null)
    const [lon, setLon] = useState(null)


    const fetchWeatherData = async () => {
        try {
            const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`)
            const data = await response.json()
            setWeather(data)
            setLoading(false)
        } catch (error) {
            console.log("error occured");
        } finally {
            console.log("finished");
        }

    }

    useEffect(() => {
        (async () => {

            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLat(location.coords.latitude)
            setLon(location.coords.longitude)
            fetchWeatherData()
        })();
    }, [lat, lon]);

    return [loading, weather, errorMsg]
}