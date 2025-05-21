import { Text, View, Image } from "react-native";

export default function Loading() {
  return (
    <View className="flex-1 items-center bg-[#5271ff]" style={{justifyContent: 'center' }}>
      <Image
        source={require("./assets/wave.png")}
        style={{ resizeMode: "contain", width: 300, zIndex: 1, position: 'absolute'}}
      />
      <Text
        style={{ fontFamily: 'Shrikhand_400Regular', fontSize: 50, zIndex: 10 }}
        className="text-white text-5xl"
      >
        A Onda
      </Text>
    </View>
  );
}
