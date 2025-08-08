import { ScrollView, View, ImageBackground, Platform, Image, Text, ActivityIndicator, StyleSheet } from "react-native";
import { useState } from "react";

export default function Perseverance () {
    const [isLoading1, setIsLoading1] = useState(true);
    const [isLoading2, setIsLoading2] = useState(true);

    return (
        <>
        <ImageBackground
            source={require('../assets/image2.jpg')} // URL de la imagen
            resizeMode="cover"
        >
            <ScrollView style={{ marginTop: 20}}>
                <View style={{ alignItems: "center"}}>
                    <Text style={{ color: "white", fontSize: 26, fontWeight: "bold" }}>The Mars Rovers: Perseverance</Text>
                </View>
                <View style={{ alignItems: "center" }}>
                    <Text style={{ color: "white", fontSize: 20, fontWeight: "bold", marginTop: 20 }}>What is the Perseverance rover?</Text>
                </View>
                <Text style={{ color: "white", fontSize: 20,padding: Platform.OS === "android" ? "20" : "15"  }}>Perseverance is a rover that landed on Mars on February 18, 2021. It is studying a region of Mars called Jezero Crater. This rover will answer lots of questions about the Red Planet and search for signs of past microbial life.</Text>
                <View style={styles.container}>
                    {isLoading1 && (
                        <ActivityIndicator style={styles.activity} color={'green'} size={'large'} />
                        )}
                        <Image
                            source={{ uri: "https://spaceplace.nasa.gov/mars-2020/en/mars2020-rover.en.jpg" }}
                            style={{ width: 380, height: 440, resizeMode: "cover", borderRadius: 10, marginTop: 20}}
                            onLoadStart={() => setIsLoading1(true)}
                            onLoadEnd={() => setIsLoading1(false)}
                        />
                </View>
                <Text style={{ color: "white", fontSize: 20,padding: Platform.OS === "android" ? "20" : "15" }}>
                    Rovers on Mars have collected evidence of water and some of the chemical building blocks of life. Scientists think it might be possible that life existed on Mars a long time ago. If there were living things, they were probably teeny tiny little organisms—something like bacteria here on Earth. But, did life actually ever get started on Mars?
                </Text>
                <Text style={{ color: "white", fontSize: 20,padding: Platform.OS === "android" ? "20" : "15" }}>
                    The Mars 2020 mission hopes to answer that question. The mission sent a rover very similar to Curiosity to explore the rocks, dirt, and air on Mars. Like Curiosity, the Perseverance rover is the size of a small SUV. The new rover has a different goal and different instruments. It will look directly for signs of past life on Mars.
                </Text>
                <Text style={{ color: "white", fontSize: 20,padding: Platform.OS === "android" ? "20" : "15" }}>
                    The new rover will also experiment with a natural resource that would be helpful in planning a human mission to Mars.                </Text>
                <Text style={{ color: "white", fontSize: 20,padding: Platform.OS === "android" ? "20" : "15" }}>
                    The atmosphere of Mars is made mostly of a gas called carbon dioxide. But many living things (including humans) need oxygen to breathe. If a human were to go to Mars, they would have to bring lots of oxygen. However, there isn’t much room on the spacecraft to carry liquid oxygen.                
                </Text>
                <Text style={{ color: "white", fontSize: 20,padding: Platform.OS === "android" ? "20" : "15" }}>
                    The rover will test a method for getting oxygen from the air in the Martian atmosphere. This will help NASA plan for the best designs to send human astronauts to explore Mars one day.                
                </Text>
                <View style={styles.container}>
                    {isLoading2 && (
                        <ActivityIndicator style={styles.activity} color={'green'} size={'large'} />
                        )}
                        <Image
                            source={{ uri: "https://spaceplace.nasa.gov/mars-2020/en/scientists-deciding-landing-site.en.jpg" }}
                            style={{ width: 380, height: 240, resizeMode: "cover", borderRadius: 10, marginTop: 20}}
                            onLoadStart={() => setIsLoading2(true)}
                            onLoadEnd={() => setIsLoading2(false)}
                        />
                </View>
                <Text style={{ color: "white", fontSize: 20, padding: Platform.OS === "android" ? "20" : "15" }}>Perseverance landed in a region of Mars called Jezero Crater. This crater is interesting to scientists because it is a very old region of Mars, and it may have once been the site of an ancient river delta. The rocks in this region could tell us about the history of the Red Planet and may have preserved signatures of past life on Mars.</Text>
                <View style={{ alignItems: "center"}}>
                    <Text style={{ color: "white", fontSize: 20, padding: Platform.OS === "android" ? "20" : "15", fontWeight: "bold" }}>When will Perseverance get to Mars?</Text>
                </View>
                <Text style={{ color: "white", fontSize: 20, padding: Platform.OS === "android" ? "20" : "15", marginBottom: 50}}>The Perseverance rover launched from Earth on July 30, 2020 and it arrived safely on Mars on February 18, 2021.</Text>
            </ScrollView>
        </ImageBackground> 
        </>
    )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative', // Permite posicionar el ActivityIndicator encima de la imagen
    marginBottom: 10
  },
  activity: {
    position: 'absolute',  
  }
})