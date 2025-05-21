import { Text, View, Image } from "react-native";

export default function TopicCard() {
  return (
    <View className="w-full flex-row p-1 gap-2">
      {/* <Image
                        source={require("../../assets/wave.png")}
                        style={{ resizeMode: "contain", width: 32, zIndex: 1, position: 'absolute'}}
                      /> */}
      <View
        className="w-8 h-8 bg-black"
        style={{ borderRadius: "100%" }}
      ></View>
      <View className="w-full">
        <View className="w-full flex-row gap-1">
          <Text className="text-start" style={{ fontSize: 10 }}>
            #15 -
          </Text>
          <Text className="" style={{ fontSize: 10 }}>
            Jonas Tur...
          </Text>
        </View>
        <View className="w-full flex-row gap-1">
          <Text className="text-start text-blue-600" style={{ fontSize: 8 }}>
            ● Há 15 minutos atrás.
          </Text>
        </View>
      </View>
    </View>
  );
}
