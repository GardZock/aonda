import { Text, View, Platform, Image } from "react-native";

export default function Loading() {
  return (
    <View className="flex-1 items-center justify-center bg-[#5271ff]">
      <Text
        style={{
          fontFamily: Platform.select({
            android: "Shrikhand_400Regular",
            ios: "Shrikhand-Regular",
          }),
        }}
      >
        A onda
      </Text>
    </View>
  );
}
