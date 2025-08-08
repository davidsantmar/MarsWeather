import { ScrollView, View, ImageBackground, Platform, Image, Text, ActivityIndicator, StyleSheet } from "react-native";
import { useState } from "react";

export default function spiritOpportunity () {
    const [isLoading1, setIsLoading1] = useState(true);
    const [isLoading2, setIsLoading2] = useState(true);
    const [isLoading3, setIsLoading3] = useState(true);
    const [isLoading4, setIsLoading4] = useState(true);
    const [isLoading5, setIsLoading5] = useState(true);
    const [isLoading6, setIsLoading6] = useState(true);

    return(
        <ImageBackground
            source={require('../assets/image2.jpg')} // URL de la imagen
            resizeMode="cover"
        >
            <ScrollView style={{ marginTop: 20}}>
                <View style={{ alignItems: "center"}}>
                    <Text style={{ color: "white", fontSize: 26, fontWeight: "bold", padding: Platform.OS === "android" ? "20" : "15"  }}>The Mars Rovers: Spirit and Opportunity</Text>
                </View>
                <View style={{ alignItems: "center" }}>
                    <Text style={{ color: "white", fontSize: 20, fontWeight: "bold", marginTop: 20 }}>What are the Spirit and Opportunity rovers?</Text>
                </View>
                <Text style={{ color: "white", fontSize: 20, padding: Platform.OS === "android" ? "20" : "15" , marginTop: 20 }}>Spirit and Opportunity are twin rovers that were made to learn more about the planet Mars.</Text>
                <View style={styles.container}>
                    {isLoading1 && (
                        <ActivityIndicator style={styles.activity} color={'green'} size={'large'} />
                        )}
                        <Image
                            source={{ uri: "https://spaceplace.nasa.gov/mars-spirit-opportunity/en/spirit-opportunity.en.jpg" }}
                            style={{ width: 380, height: 170, resizeMode: "cover", borderRadius: 10, marginTop: 20 }}
                            onLoadStart={() => setIsLoading1(true)}
                            onLoadEnd={() => setIsLoading1(false)}
                        />
                </View>
                <Text style={{ color: "white", fontSize: 20, padding: Platform.OS === "android" ? "20" : "15", marginTop: 20  }}>After the success of the Sojourner rover, NASA wanted to send more rovers to learn about Mars. So, in 2003, they sent two rovers to the Red Planet. The rovers were named Spirit and Opportunity. Together, they were part of the Mars Exploration Rover mission.</Text>
                <Text style={{ color: "white", fontSize: 20, padding: Platform.OS === "android" ? "20" : "15", marginTop: 20  }}>Spirit and Opportunity were made as twins. They both carried all of the same scientific instruments. And each was about the size of a golf cart.</Text>
                <View style={styles.container}>
                    {isLoading2 && (
                        <ActivityIndicator style={styles.activity} color={'green'} size={'large'} />
                        )}
                        <Image
                            source={{ uri: "https://spaceplace.nasa.gov/mars-spirit-opportunity/en/spirit-opportunity-size.en.jpg" }}
                            style={{ width: 380, height: 140, resizeMode: "cover", borderRadius: 10, marginTop: 20}}
                            onLoadStart={() => setIsLoading2(true)}
                            onLoadEnd={() => setIsLoading2(false)}
                        />
                </View>
                <Text style={{ color: "white", fontSize: 20, padding: Platform.OS === "android" ? "20" : "15" , marginTop: 20  }}>On Earth, where there is water, there is life. Spirit and Opportunity were sent to Mars to find more clues about the history of water there, and to see if the Red Planet could ever have supported life. To do this, scientists sent the two rovers to two different landing sites. The rovers landed on opposite sides of the planet.</Text>
                <View style={styles.container}>
                    {isLoading3 && (
                        <ActivityIndicator style={styles.activity} color={'green'} size={'large'} />
                        )}
                        <Image
                            source={{ uri: "https://spaceplace.nasa.gov/mars-spirit-opportunity/en/rover-landing-sites.en.jpg" }}
                            style={{ width: 380, height: 240, resizeMode: "cover", borderRadius: 10, marginTop: 20}}
                            onLoadStart={() => setIsLoading3(true)}
                            onLoadEnd={() => setIsLoading3(false)}
                        />
                    <Text style={{ color: "white", padding: 10, fontStyle: "italic" }}>The landing sites of all four Mars rovers on a map of Mars. Credit: National Geographic Society, MOLA Science Team, MSS, JPL, NASA</Text>
                </View>
                <Text style={{ color: "white", fontSize: 20, padding: Platform.OS === "android" ? "20" : "15" , marginTop: 20  }}>Spirit landed in a region called Gusev Crater. Scientists wanted to explore the crater because they thought it could have held water long ago. From pictures taken by satellites, scientists thought it looked like several large rivers flowed into Gusev Crater.</Text>
                <Text style={{ color: "white", fontSize: 20, padding: Platform.OS === "android" ? "20" : "15" , marginTop: 20  }}>Opportunity landed on the other side of Mars in an area called Meridiani Planum. This region was nice because it was a flat, safe spot for the rover to land. Also, studies with a satellite around Mars showed that it might contain a mineral called grey hematite. On Earth, grey hematite is often found in the presence of water.</Text>
                <View style={styles.container}>
                    {isLoading4 && (
                        <ActivityIndicator style={styles.activity} color={'green'} size={'large'} />
                        )}
                        <Image
                            source={{ uri: "https://spaceplace.nasa.gov/mars-spirit-opportunity/en/hematite_blueberries.en.jpg" }}
                            style={{ width: 360, height: 360, resizeMode: "cover", borderRadius: 10, marginTop: 20}}
                            onLoadStart={() => setIsLoading4(true)}
                            onLoadEnd={() => setIsLoading4(false)}
                        />
                    <Text style={{ color: "white", padding: 10, fontStyle: "italic" }}>Opportunity found grey hematite in sphere-like grains in Meridiani Planum. Scientists called these grains “blueberries.” On Earth, hematite forms near water. Credit: NASA/JPL-Caltech/Cornell</Text>
                </View>
                <Text style={{ color: "white", fontSize: 20, padding: Platform.OS === "android" ? "20" : "15" , marginTop: 20  }}>On its journey, Spirit took many photos of Mars with its camera. They were the first color photos taken by a rover on another planet. Spirit also found several signs of past water, and evidence of geothermal, or volcanic activity. It explored sites that may have been hot springs millions of years ago.</Text>
                <View style={styles.container}>
                    {isLoading5 && (
                        <ActivityIndicator style={styles.activity} color={'green'} size={'large'} />
                        )}
                        <Image
                            source={{ uri: "https://spaceplace.nasa.gov/mars-spirit-opportunity/en/silica-wheelmark.en.jpg" }}
                            style={{ width: 360, height: 165, resizeMode: "cover", borderRadius: 10, marginTop: 20}}
                            onLoadStart={() => setIsLoading5(true)}
                            onLoadEnd={() => setIsLoading5(false)}
                        />
                    <Text style={{ color: "white", padding: 10, fontStyle: "italic" }}>In this photo, you can see where Spirit dragged one of its wheels and churned up some soil. Here, it found a light-colored mineral called silica. On Earth, this kind of silica usually exists in hot springs, where life as we know it often finds a hot, happy home. Perhaps ancient microbes on Mars did as well! Credit: NASA/JPL-Caltech/Cornell</Text>
                </View>
                <Text style={{ color: "white", fontSize: 20, padding: Platform.OS === "android" ? "20" : "15" , marginTop: 20  }}>Not to be outdone by its twin, Opportunity also took many color photos of the Martian landscape. It found evidence of water, too.</Text>
                <Text style={{ color: "white", fontSize: 20, padding: Platform.OS === "android" ? "20" : "15" , marginTop: 20  }}>Opportunity studied layers of minerals in the rock near its landing site. The evidence it collected suggested that its landing site was once the shoreline of a salty sea.</Text>
                <View style={styles.container}>
                    {isLoading6 && (
                        <ActivityIndicator style={styles.activity} color={'green'} size={'large'} />
                        )}
                        <Image
                            source={{ uri: "https://spaceplace.nasa.gov/mars-spirit-opportunity/en/opportunity-landing-site.en.jpg" }}
                            style={{ width: 380, height: 120, resizeMode: "cover", borderRadius: 10, marginTop: 20}}
                            onLoadStart={() => setIsLoading6(true)}
                            onLoadEnd={() => setIsLoading6(false)}
                        />
                    <Text style={{ color: "white", padding: 10, fontStyle: "italic", padding: Platform.OS === "android" ? "20" : "15"  }}>Opportunity’s landing site in the flat Meridiana Planum. The shiny metal structure on the left is the rover’s heat shield that popped off during landing. Credit: Mars Exploration Rover Mission, JPL, NASA</Text>
                </View>
                <Text style={{ color: "white", fontSize: 20, padding: Platform.OS === "android" ? "20" : "15" , marginTop: 20, marginBottom: 50 }}>The rocks that Spirit and Opportunity studied showed scientists that a long time ago, water on Mars may have looked a lot like water on Earth. Mars once had lakes and rivers on the surface. Like Earth, it also had water below the ground, as well as water vapor in the atmosphere.</Text>
            </ScrollView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative', // Permite posicionar el ActivityIndicator encima de la imagen
  },
  activity: {
    position: 'absolute',  
  }
})