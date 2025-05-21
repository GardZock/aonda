import { Text, View, Image } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function NavBar() {
  return (
    <View className="flex-row items-center justify-between bg-[#5271ff] p-4 pt-8 pb-2">
      <View className="flex-row items-center justify-center">
        <Image
          source={require("../../assets/wave.png")}
          style={{
            resizeMode: "contain",
            width: 100,
            zIndex: 1,
            position: "absolute",
          }}
        />
        <Text
          style={{
            fontFamily: "Shrikhand_400Regular",
            fontSize: 24,
            zIndex: 10,
          }}
          className="text-white text-center"
        >
          A Onda
        </Text>
      </View>

      <View className="flex-row items-center gap-2">
        <AntDesign name="search1" size={24} color="white" />
        <Entypo name="menu" size={30} color="white" />
      </View>
    </View>
  );
}
