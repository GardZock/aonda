import {Text, View, ScrollView } from 'react-native'
import NavBar from '../components/navbar'
import TopicCard from '../components/topicCard'
import NewsCard from '../components/newsCard'

export default function Home(){
    return (
        <ScrollView className="flex-1 mb-4">
            <NavBar/>
            <View className="flex-1 px-4 mt-2">
              <Text className="text-2xl font-bold">
                Últimas Notícias
              </Text>
              <View className="mt-3 gap-4">
                <NewsCard/>
                
                <View className="max-w-full h-[240px] gap-[2px]" style={{ display: 'flex', flexDirection: 'row' }}>
                  <View className="w-[40%] border-2 border-black rounded-lg">
                    <View className="w-full">
                      <Text className="text-center font-bold p-1">
                        Últimos Tópicos
                      </Text>
                    </View>
                    <TopicCard/>
                    <TopicCard/>
                    <TopicCard/>
                    <TopicCard/>
                    <TopicCard/>
                    <TopicCard/>
                  </View>
                  <NewsCard width="60" height="240"/>
                </View>
                
                <NewsCard/>
                <NewsCard/>
                <NewsCard/>
              </View>
            </View>
        </ScrollView>
    )
}