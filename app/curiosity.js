import { ScrollView, View, ImageBackground, Platform, Image, Text, ActivityIndicator, StyleSheet } from "react-native";
import { useState } from "react";

export default function Curiosity () {
    const [isLoading1, setIsLoading1] = useState(true);
    const [isLoading2, setIsLoading2] = useState(true);
    const [isLoading3, setIsLoading3] = useState(true);
    const [isLoading4, setIsLoading4] = useState(true);
    const [isLoading5, setIsLoading5] = useState(true);
    const [isLoading6, setIsLoading6] = useState(true);
    const [isLoading7, setIsLoading7] = useState(true);

    return (
        <>
        <ImageBackground
            source={require('../assets/image2.jpg')} // URL de la imagen
            resizeMode="cover"
        >
            <ScrollView style={{ marginTop: 20}}>
                <View style={{ alignItems: "center"}}>
                    <Text style={{ color: "white", fontSize: 26, fontWeight: "bold" }}>The Mars Rovers: Curiosity</Text>
                </View>
                <View style={{ alignItems: "center" }}>
                    <Text style={{ color: "white", fontSize: 20, fontWeight: "bold", marginTop: 20 }}>What is the Curiosity rover?</Text>
                </View>
                <Text style={{ color: "white", fontSize: 20, padding: Platform.OS === "android" ? "20" : "15"   }}>Curiosity is a rover that was sent to Mars to determine if the Red Planet ever had the proper conditions for microbial life to survive.</Text>
                <View style={styles.container}>
                    {isLoading1 && (
                        <ActivityIndicator style={styles.activity} color={'green'} size={'large'} />
                        )}
                        <Image
                            source={{ uri: 'https://spaceplace.nasa.gov/mars-curiosity/en/curiosity-here.en.jpg' }}
                            style={{ width: 380, height: 220, resizeMode: "cover", borderRadius: 10, marginTop: 20}}
                            onLoadStart={() => setIsLoading1(true)}
                            onLoadEnd={() => setIsLoading1(false)}
                        />
                </View>
                <Text style={{ color: "white", fontSize: 20, padding: Platform.OS === "android" ? "20" : "15"  }}>
                    On Earth, where there is water, there are living things. We know that Mars had water a long time ago. But did it also have other conditions life needs?
                </Text>
                <Text style={{ color: "white", fontSize: 20, padding: Platform.OS === "android" ? "20" : "15"  }}>
                    To find out, NASA sent the Curiosity rover to Mars. Curiosity is the largest robot to ever land on another planet. It is about the size of a small SUV.
                </Text>
                <View style={styles.container}>
                    {isLoading2 && (
                        <ActivityIndicator style={styles.activity} color={'green'} size={'large'} />
                        )}
                        <Image
                            source={{ uri: "https://spaceplace.nasa.gov/mars-curiosity/en/curiosity-size.en.jpg" }}
                            style={{ width: 380, height: 140, resizeMode: "cover", borderRadius: 10, marginTop: 20}}
                            onLoadStart={() => setIsLoading2(true)}
                            onLoadEnd={() => setIsLoading2(false)}
                        />
                </View>
                <Text style={{ color: "white", fontSize: 20, padding: Platform.OS === "android" ? "20" : "15"  }}>Because Curiosity is so big, it also has bigger wheels than the previous rovers. This helps it to roll over rocks and sand without getting stuck. However, even on a long driving day, it still only travels about 660 feet.</Text>
                <View style={{ alignItems: "center", justifyContent: "space-around", flexDirection: "column" }}>
                    {isLoading3 && (
                        <ActivityIndicator style={styles.activity} color={'green'} size={'large'} />
                        )}
                        <Image
                            source={{ uri: "https://spaceplace.nasa.gov/mars-curiosity/en/rover-wheel-comparison.en.jpg" }}
                            style={{ width: 380, height: 180, resizeMode: "cover", borderRadius: 10, marginTop: 20}}
                            onLoadStart={() => setIsLoading3(true)}
                            onLoadEnd={() => setIsLoading3(false)}
                        />
                    <Text style={{ color: "white", padding: 10, fontStyle: "italic", padding: Platform.OS === "android" ? "20" : "15" }}>At 20 inches in diameter, Curiosity’s wheels are much bigger than the wheels of previous rovers.</Text>
                </View>
                <Text style={{ color: "white", fontSize: 20, padding: Platform.OS === "android" ? "20" : "15"  }}>Curiosity landed in Gale Crater. This crater is special because it has a tall mountain in the middle. The mountain has many layers of rock. Each layer is made of different minerals from different time periods. These minerals could tell scientists about the history of water on Mars.</Text>
                <View style={styles.container}>
                    {isLoading4 && (
                        <ActivityIndicator style={styles.activity} color={'green'} size={'large'} />
                        )}
                        <Image
                            source={{ uri: "https://spaceplace.nasa.gov/mars-sojourner/en/rover-landing-sites.en.jpg" }}
                            style={{ width: 380, height: 230, resizeMode: "cover", borderRadius: 10, marginTop: 20}}
                            onLoadStart={() => setIsLoading4(true)}
                            onLoadEnd={() => setIsLoading4(false)}
                        />
                    <Text style={{ color: "white", padding: 10, fontStyle: "italic", padding: Platform.OS === "android" ? "20" : "15"  }}>The landing sites of all four Mars rovers on a map of Mars. Credit: National Geographic Society, MOLA Science Team, MSS, JPL, NASA</Text>
                </View>
                <View style={{ alignItems: "center", justifyContent: "space-around", flexDirection: "column" }}>
                    {isLoading5 && (
                        <ActivityIndicator style={styles.activity} color={'green'} size={'large'} />
                        )}
                        <Image
                            source={{ uri: "https://spaceplace.nasa.gov/mars-curiosity/en/gale-crater.en.jpg" }}
                            style={{ width: 380, height: 220, resizeMode: "cover", borderRadius: 10, marginTop: 20}}
                            onLoadStart={() => setIsLoading5(true)}
                            onLoadEnd={() => setIsLoading5(false)}
                        />
                    <Text style={{ color: "white", padding: 10, fontStyle: "italic", padding: Platform.OS === "android" ? "20" : "15"  }}>An up close image of Gale Crater, from above. Credit: NASA/JPL-Caltech/ASU</Text>
                </View>
                <Text style={{ color: "white", fontSize: 20, padding: Platform.OS === "android" ? "20" : "15"  }}>The rover uses many scientific instruments to study the rocks in Gale Crater. Curiosity used its drill to make a hole in a rock that once was mud at the bottom of a lake. One of its other instruments studied the powder drilled from the rock. This information helped scientists learn that the Gale crater had ingredients that ancient life would have needed to survive.</Text>
                <View style={styles.container}>
                    {isLoading6 && (
                        <ActivityIndicator style={styles.activity} color={'green'} size={'large'} />
                        )}
                        <Image
                            source={{ uri: "https://spaceplace.nasa.gov/mars-curiosity/en/drilled-hole.en.jpg" }}
                            style={{ width: 334, height: 259, resizeMode: "cover", borderRadius: 10, marginTop: 20}}
                            onLoadStart={() => setIsLoading6(true)}
                            onLoadEnd={() => setIsLoading6(false)}
                        />
                    <Text style={{ color: "white", padding: 10, fontStyle: "italic", padding: Platform.OS === "android" ? "20" : "15"  }}>A hole on Martian rock drilled by Curiosity. Credit: NASA/JPL-Caltech/MSSS</Text>
                </View>
                <Text style={{ color: "white", fontSize: 20, padding: Platform.OS === "android" ? "10" : "5", padding: Platform.OS === "android" ? "20" : "15"   }}>Scientists sent Curiosity to Mars to measure lots of other things, too—including radiation. Radiation is a type of energy that can come from the sun. It travels in high-energy waves that can be harmful to living things. Curiosity found that Mars has high, dangerous levels of radiation. NASA will use Curiosity’s radiation data to design missions to be safer for human explorers.</Text>
                <Text style={{ color: "white", fontSize: 20, padding: Platform.OS === "android" ? "10" : "5", padding: Platform.OS === "android" ? "20" : "15"   }}>Curiosity brought 17 cameras with it to the Red Planet—more than any other rover. It uses some of its cameras to take photos of its journey. Cameras also act as Curiosity’s eyes, helping it to spot and stay away from danger.</Text>
                <Text style={{ color: "white", fontSize: 20, padding: Platform.OS === "android" ? "10" : "5", padding: Platform.OS === "android" ? "20" : "15"   }}>One of Curiosity’s cameras—at the end of its 7 foot long robotic arm—even acts like a sort of “selfie stick.” It can hold the camera two meters away and take a selfie to send back to Earth!</Text>
                <View style={ styles.container }>
                    {isLoading7 && (
                        <ActivityIndicator style={styles.activity} color={'green'} size={'large'} />
                        )}
                        <Image
                            source={{ uri: "https://spaceplace.nasa.gov/mars-curiosity/en/curiosity-selfie.en.jpg" }}
                            style={{ width: 334, height: 259, resizeMode: "cover", borderRadius: 10, marginTop: 20}}
                            onLoadStart={() => setIsLoading7(true)}
                            onLoadEnd={() => setIsLoading7(false)}
                        />
                    <Text style={{ color: "white", padding: 10, fontStyle: "italic", marginBottom: 50, padding: Platform.OS === "android" ? "20" : "15"  }}>A self-portrait of Curiosity on a Martian sand dune. At this site, it used instruments to scoop up and study sand samples. Credit: NASA/JPL-Caltech/MSSS</Text>
                </View>
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
});