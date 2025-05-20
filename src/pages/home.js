import {Text, View, StyleSheet, Image} from 'react-native'
import NavBar from '../components/navbar'

export default function Home(){
    return (
        <View className="flex-1">
            <NavBar/>
            <Text>A onda</Text>
        </View>
    )
}