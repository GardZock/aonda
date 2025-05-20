import {Text, View, StyleSheet, Image} from 'react-native'

export default function NavBar(){
    return (
        <View className="flex-row items-center justify-between bg-[#5271ff] p-4">
            <View className="flex-row items-center">
                {/* <Image
                    source={require('../assets/logo.png')}
                    className="w-10 h-10"
                /> */}
                <Text className="text-white text-lg font-bold ml-2">A Onda</Text>
            </View>

            <View className="flex-row items-center">
                <Text className="text-white text-lg font-bold mr-4">Home</Text>
                <Text className="text-white text-lg font-bold">Sobre</Text>
            </View>
        </View>
    )
}