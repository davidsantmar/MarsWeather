import { ScrollView, View, ImageBackground, Platform, Image, Text, ActivityIndicator, StyleSheet } from "react-native";
import { useState } from "react";

export default function Sojourner () {
    const [isLoading1, setIsLoading1] = useState(true);
    const [isLoading2, setIsLoading2] = useState(true);
    const [isLoading3, setIsLoading3] = useState(true);
    const [isLoading4, setIsLoading4] = useState(true);
    const [isLoading5, setIsLoading5] = useState(true);

    return (
        <>
        <ImageBackground
            source={require('../assets/image2.jpg')} // URL de la imagen
            resizeMode="cover"
        >
            <ScrollView style={{ marginTop: 20}}>
                <View style={{ alignItems: "center"}}>
                    <Text style={{ color: "white", fontSize: 26, fontWeight: "bold" }}>The Mars Rovers: Sojourner</Text>
                </View>
                <View style={{ alignItems: "center" }}>
                    <Text style={{ color: "white", fontSize: 20, fontWeight: "bold", marginTop: 20 }}>What is the Sojourner rover?</Text>
                </View>
                <Text style={{ color: "white", fontSize: 20, padding: Platform.OS === "android" ? "20" : "15"  }}>Sojourner is a rover that landed on Mars in 1997 in a location called Ares Vallis where it explored and took many photos.</Text>
                <View style={styles.container}>
                    {isLoading1 && (
                        <ActivityIndicator style={styles.activity} color={'green'} size={'large'} />
                        )}
                        <Image
                            source={{ uri: "https://spaceplace.nasa.gov/mars-sojourner/en/sojourner-first.en.jpg" }}
                            style={{ width: 210, height: 210, resizeMode: "cover", borderRadius: 10, marginTop: 20}}
                            onLoadStart={() => setIsLoading1(true)}
                            onLoadEnd={() => setIsLoading1(false)}
                        />
                    <Image/>
                </View>
                <Text style={{ color: "white", fontSize: 20, padding: Platform.OS === "android" ? "20" : "15" }}>
                    In 1997, NASA scientists did something pretty amazing. For the first time, they used a small wheeled robot to study the surface of Mars. This robotic explorer, called a rover, was named Sojourner. It was only about the size of a microwave oven. However, it went on to share lots of important new information with scientists.
                </Text>
                <View style={styles.container}>
                    {isLoading2 && (
                        <ActivityIndicator style={styles.activity} color={'green'} size={'large'} />
                        )}
                        <Image
                            source={{ uri: "https://spaceplace.nasa.gov/mars-sojourner/en/sojourner-size.en.jpg" }}
                            style={{ width: 390, height: 210, resizeMode: "cover", borderRadius: 10, marginTop: 20}}
                            onLoadStart={() => setIsLoading2(true)}
                            onLoadEnd={() => setIsLoading2(false)}
                        />
                </View>
                <Text style={{ color: "white", fontSize: 20, padding: Platform.OS === "android" ? "20" : "15" , marginTop: 20  }}>Sojourner wasn’t alone on its journey to Mars. It traveled within a spacecraft called a lander. The lander was shaped like a pyramid and was covered in airbags. The airbags helped the lander have a safe, bouncy landing. The pyramid shape helped ensure the lander and rover could be flipped right-side-up, no matter how they landed. After the lander touched down on Mars, a panel opened and Sojourner rolled out to start exploring.</Text>
                <View style={styles.container}>
                    {isLoading3 && (
                        <ActivityIndicator style={styles.activity} color={'green'} size={'large'} />
                        )}
                        <Image
                            source={{ uri: "https://spaceplace.nasa.gov/mars-sojourner/en/sojourner-movie.en.gif" }}
                            style={{ width: 334, height: 259, resizeMode: "cover", borderRadius: 10, marginTop: 20}}
                            onLoadStart={() => setIsLoading3(true)}
                            onLoadEnd={() => setIsLoading3(false)}
                        />
                    <Text style={{ color: "white", padding: 10, fontStyle: "italic", padding: Platform.OS === "android" ? "20" : "15" }}>The Sojourner rover drives around on the Martian surface and rolls one of its wheels up on a rock. Credit: NASA/JPL-Caltech</Text>
                </View>
                <Text style={{ color: "white", fontSize: 20, padding: Platform.OS === "android" ? "10" : "5", padding: Platform.OS === "android" ? "20" : "15"   }}>The rover explored an area of Mars near its landing site called Ares Vallis. Scientists were interested in this area because it looked like the site of an ancient flood. The rushing water of a flood would have pushed lots of rocks and dirt into one place. This means the rover could study lots of different types of rocks without traveling very far.</Text>
                <Text style={{ color: "white", fontSize: 20, padding: Platform.OS === "android" ? "10" : "5", padding: Platform.OS === "android" ? "20" : "15"  }}>Engineers also liked the area because it seemed like a flat, safe place for Sojourner to land.</Text>
                <View style={styles.container}>
                    {isLoading4 && (
                        <ActivityIndicator style={styles.activity} color={'green'} size={'large'} />
                        )}
                        <Image
                            source={{ uri: "https://spaceplace.nasa.gov/mars-sojourner/en/rover-landing-sites.en.jpg" }}
                            style={{ width: 360, height: 220, resizeMode: "cover", borderRadius: 10, marginTop: 20}}
                            onLoadStart={() => setIsLoading4(true)}
                            onLoadEnd={() => setIsLoading4(false)}
                        />
                    <Text style={{ color: "white", padding: 10, fontStyle: "italic", padding: Platform.OS === "android" ? "20" : "15"  }}>The landing sites of all four Mars rovers on a map of Mars. Credit: National Geographic Society, MOLA Science Team, MSS, JPL, NASA</Text>
                </View>
                <Text style={{ color: "white", fontSize: 20, padding: Platform.OS === "android" ? "20" : "15"  }}>As Sojourner drove short distances, it used its camera to take pictures of the Martian landscape. It sent back more than 550 pictures of the Red Planet. The rover used instruments to study what the nearby Martian rocks and dirt were made of. Its lander also collected information about winds and other weather factors on Mars.</Text>
                <View style={styles.container}>
                    {isLoading5 && (
                        <ActivityIndicator style={styles.activity} color={'green'} size={'large'} />
                        )}
                        <Image
                            source={{ uri: "https://spaceplace.nasa.gov/mars-sojourner/en/sojourner-rock.en.jpg" }}
                            style={{ width: 334, height: 259, resizeMode: "cover", borderRadius: 10, marginTop: 20}}
                            onLoadStart={() => setIsLoading5(true)}
                            onLoadEnd={() => setIsLoading5(false)}
                        />
                    <Text style={{ color: "white", padding: 10, fontStyle: "italic", padding: Platform.OS === "android" ? "20" : "15"  }}>A photograph taken by Sojourner of a Martian rock. Scientists think that the texture on this rock suggests that it was slowly shaped over time by wind. Credit: NASA/JPL-Caltech</Text>
                </View>
                <Text style={{ color: "white", fontSize: 20, padding: Platform.OS === "android" ? "20" : "15" , marginBottom: 50  }}>From far away, Mars looks cold, dry, and rocky. But Sojourner's photos and information told a much different story. We learned that a long time ago, Mars used to be a warmer and wetter place.</Text>
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