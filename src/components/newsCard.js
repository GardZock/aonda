import { Text, View, Image } from "react-native";

export default function NewsCard(props) {
    const style = {
        width: props.width ? `${props.width}%` : "100%",
        height: props.height ? props.height : 160,
        justifyContent: 'flex-end'
    };
    
    
  return (
    <View className="h-40 bg-blue-500 p-2 border-2 border-black rounded-lg" style={style}>
        <Text className="font-bold text-white text-start">Novo forúm criado</Text>
        <Text className="text-sm text-white text-start">Um novo fórum foi criado para...</Text>
    </View>
  );
}
