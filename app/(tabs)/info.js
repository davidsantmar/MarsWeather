import { ScrollView, Text, Image, View, Platform, ImageBackground, StyleSheet, ActivityIndicator } from "react-native";
import { useState } from "react";

export default function Info() {
    const [isLoading1, setIsLoading1] = useState(true);
    const [isLoading2, setIsLoading2] = useState(true);
    const [isLoading3, setIsLoading3] = useState(true);
    const [isLoading4, setIsLoading4] = useState(true);
    const [isLoading5, setIsLoading5] = useState(true);
    const [isLoading6, setIsLoading6] = useState(true);
    const [isLoading7, setIsLoading7] = useState(true);
    const [isLoading8, setIsLoading8] = useState(true);
    const [isLoading9, setIsLoading9] = useState(true);

    return (
        <ImageBackground
            source={require('../../assets/image0.png')} 
            style={styles.background}
            resizeMode="cover"
        >
            <ScrollView>
                <View style={{ alignItems: "center", marginTop:"20", marginBottom: 20}}>
                    <Text style={{ color: "white", fontSize: 26, fontWeight: "bold"}}>All about Mars</Text>
                </View>
                <Text style={{ color: "white", fontSize: 20, padding: Platform.OS === "android" ? "20" : "15" }}>Mars is a cold desert world. The average temperature on Mars is minus 85 degrees Fahrenheit (-29 Celsius) – way below freezing. It is half the size of Earth. Mars is sometimes called the Red Planet. It's red because of rusty iron in the ground.</Text>
                <Text style={{ color: "white", marginTop:"20", fontSize: 20, padding: Platform.OS === "android" ? "20" : "15" }}>Like Earth, Mars has seasons, polar ice caps, volcanoes, canyons, and weather. It has a very thin atmosphere made mostly of carbon dioxide, nitrogen, and argon. People would not be able to breathe the air on Mars.</Text>
                
                <Text style={{ color: "white", marginTop:"20", fontSize: 20, padding: Platform.OS === "android" ? "20" : "15" }}>There are signs of ancient floods on Mars, but now water mostly exists in icy dirt and thin clouds. On some Martian hillsides, there is evidence of liquid salty water in the ground.</Text>
                <Text style={{ color: "white", marginTop:"20", fontSize: 20, padding: Platform.OS === "android" ? "20" : "15" }}>Scientists want to know if Mars may have had living things in the past. They also want to know if Mars could support life now or in the future.</Text>
                <View style={styles.container}>
                    {isLoading1 && (
                        <ActivityIndicator style={styles.activity} color={'green'} size={'large'} />
                        )}
                        <Image
                            source={{ uri: "https://spaceplace.nasa.gov/all-about-mars/en/cartoon-mars.en.png" }}
                            style={{ width: 334, height: 240, resizeMode: "cover", borderRadius: 10, marginTop: 20}}
                            onLoadStart={() => setIsLoading1(true)}
                            onLoadEnd={() => setIsLoading1(false)}
                        />
                </View>
                <View style={{ alignItems: "center" }}>
                    <Text style={{ color: "white", marginTop:"30", fontSize: 20, fontWeight: "bold"}}>Structure and Surface</Text>
                </View>
                <Text style={{ color: "white", fontSize: 20, padding: Platform.OS === "android" ? "20" : "15" }}> · Mars is a terrestrial planet. It is small and rocky.</Text>
                <Text style={{ color: "white", fontSize: 20, padding: Platform.OS === "android" ? "20" : "15" }}> · Mars has a thin atmosphere.</Text>
                <Text style={{ color: "white", fontSize: 20, padding: Platform.OS === "android" ? "20" : "15" }}> · Mars has an active atmosphere, but the surface of the planet is not active. Its volcanoes are dead.</Text>
                <View style={{ alignItems: "center" }}>
                    <Text style={{ color: "white", marginTop:"20", fontSize: 20, fontWeight: "bold"}}>Time on Mars</Text>
                </View>
                <Text style={{ color: "white", fontSize: 20, padding: Platform.OS === "android" ? "20" : "15" }}> · One day on Mars lasts 24.6 hours. It is just a little longer than a day on Earth.</Text>
                <Text style={{ color: "white", fontSize: 20, padding: Platform.OS === "android" ? "20" : "15" }}> · One year on Mars is 687 Earth days. It is almost twice as long as one year on Earth.</Text>
                <View style={{ alignItems: "center" }}>
                    <Text style={{ color: "white", marginTop:"20", fontSize: 20, fontWeight: "bold" }}>Mars’ Neighbors</Text>
                </View>
                <Text style={{ color: "white", fontSize: 20, padding: Platform.OS === "android" ? "20" : "15" }}> · Mars has two moons. Their names are Phobos and Deimos.</Text>
                <Text style={{ color: "white", fontSize: 20, padding: Platform.OS === "android" ? "20" : "15" }}> · Mars is the fourth planet from the Sun. That means Earth and Jupiter are Mars’ neighboring planets.</Text>
                <View style={{ alignItems: "center" }}>
                    <Text style={{ color: "white", marginTop:"20", fontSize: 20, fontWeight: "bold" }}>Quick History</Text>
                </View>
                <Text style={{ color: "white", fontSize: 20, padding: Platform.OS === "android" ? "20" : "15" }}> · Mars has been known since ancient times because it can be seen without advanced telescopes.</Text>
                <Text style={{ color: "white", fontSize: 20, padding: Platform.OS === "android" ? "20" : "15" }}> · There was even a flying helicopter on Mars. Seriously! The Mars Helicopter, Ingenuity, successfully tested powered, controlled flight on another world for the first time. It hitched a ride to Mars on the Perseverance rover and worked with the rover to explore Mars. Ingenuity was designed as a tech demo expected to fly no more than five times over 30 days. It ended its mission in early 2024 having completed 72 flights in just under three years. Thanks Ingenuity!</Text>
                <Text style={{ color: "white", fontSize: 20, padding: Platform.OS === "android" ? "20" : "15" }}> · Several missions have orbited, landed on, or roved around on Mars: InSight, MAVEN, Mars Reconnaissance Orbiter, and many more! Mars is the only planet we have sent rovers to. They drive around Mars, taking pictures and measurements. Learn more about them and what they have discovered by clicking the pictures below!</Text>
                <View style={{ alignItems: "center" }}>
                    <Text style={{ color: "white", marginTop:"20", fontSize: 20, fontWeight: "bold" }}>Mars Rovers</Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-evenly"}}>
                    <View style={styles.roverCard}>
                        {isLoading2 && (
                        <ActivityIndicator style={styles.activity} color={'green'} size={'small'} />
                        )}
                        <Image
                            source={{ uri: "https://spaceplace.nasa.gov/resources/recommended-icons/perseverance.en.png" }}
                            style={{ width: 80, height: 80, resizeMode: "cover", borderRadius: 10, marginTop: 20}}
                            onLoadStart={() => setIsLoading2(true)}
                            onLoadEnd={() => setIsLoading2(false)}
                        />
                        <Text style={{ color: "white", marginTop:"2", fontSize: 15 }}>Perseverance</Text>
                    </View>
                    <View style={styles.roverCard}>
                        {isLoading3 && (
                        <ActivityIndicator style={styles.activity} color={'green'} size={'small'} />
                        )}
                        <Image
                            source={{ uri: "https://spaceplace.nasa.gov/resources/recommended-icons/curiosity.en.png" }}
                            style={{ width: 80, height: 80, resizeMode: "cover", borderRadius: 10, marginTop: 20}}
                            onLoadStart={() => setIsLoading3(true)}
                            onLoadEnd={() => setIsLoading3(false)}
                        />
                        <Text style={{ color: "white", marginTop:"2", fontSize: 15 }}>Curiosity</Text>
                    </View>
                    <View style={styles.roverCard}>
                        {isLoading4 && (
                        <ActivityIndicator style={styles.activity} color={'green'} size={'small'} />
                        )}
                        <Image
                            source={{ uri: "https://spaceplace.nasa.gov/resources/recommended-icons/spirit-opportunity.en.png" }}
                            style={{ width: 80, height: 80, resizeMode: "cover", borderRadius: 10, marginTop: 20}}
                            onLoadStart={() => setIsLoading4(true)}
                            onLoadEnd={() => setIsLoading4(false)}
                        />
                        <View style={{ flexDirection: "column", alignItems: "center", width: 110}}>
                            <Text style={{ color: "white", marginTop:"2", fontSize: 15 }}>Spirit and Opportunity</Text>
                        </View>
                    </View>
                    <View style={styles.roverCard}>
                        {isLoading5 && (
                        <ActivityIndicator style={styles.activity} color={'green'} size={'small'} />
                        )}
                        <Image
                            source={{ uri: "https://spaceplace.nasa.gov/resources/recommended-icons/sojourner.en.png" }}
                            style={{ width: 80, height: 80, resizeMode: "cover", borderRadius: 10, marginTop: 20}}
                            onLoadStart={() => setIsLoading5(true)}
                            onLoadEnd={() => setIsLoading5(false)}
                        />
                        <Text style={{ color: "white", marginTop:"2", fontSize: 15 }}>Sojourner</Text>
                    </View>
                </View>
                <View style={{ alignItems: "center" }}>
                    <Text style={{ color: "white", marginTop:"30", fontSize: 20, fontWeight: "bold", marginBottom: 20}}>What does Mars look like?</Text>
                </View>
                <View style={styles.container}>
                    {isLoading6 && (
                        <ActivityIndicator style={styles.activity} color={'green'} size={'large'} />
                        )}
                        <Image
                            source={{ uri: "https://spaceplace.nasa.gov/all-about-mars/en/VallesMarineris.en.jpg" }}
                            style={{ width: 320, height: 310, resizeMode: "cover", borderRadius: 10, marginTop: 10}}
                            onLoadStart={() => setIsLoading6(true)}
                            onLoadEnd={() => setIsLoading6(false)}
                        />
                </View>    
                <View style={styles.container}>
                    {isLoading7 && (
                        <ActivityIndicator style={styles.activity} color={'green'} size={'large'} />
                        )}
                        <Image
                            source={{ uri: "https://spaceplace.nasa.gov/all-about-mars/en/Ingenuity-Mars-Helicopter-footage.en.gif" }}
                            style={{ width: 320, height: 310, resizeMode: "cover", borderRadius: 10, marginTop: 20}}
                            onLoadStart={() => setIsLoading7(true)}
                            onLoadEnd={() => setIsLoading7(false)}
                        />
                    <Text style={{ color: "white", padding: 10, fontStyle: "italic", padding: Platform.OS === "android" ? "20" : "15" }}>This animated GIF was created using footage taken by NASA’s Ingenuity Mars Helicopter during its 25th flight on April 8, 2022. Credit: NASA/JPL-Caltech</Text>
                </View>    
                <View style={styles.container}>
                    {isLoading8 && (
                        <ActivityIndicator style={styles.activity} color={'green'} size={'large'} />
                        )}
                        <Image
                            source={{ uri: "https://spaceplace.nasa.gov/all-about-mars/en/mars-curiosity-rover-okoruso-drill-hole-self-portrait.en.gif" }}
                            style={{ width: 320, height: 310, resizeMode: "cover", borderRadius: 10, marginTop: 20}}
                            onLoadStart={() => setIsLoading8(true)}
                            onLoadEnd={() => setIsLoading8(false)}
                        />
                    <Text style={{ color: "white", padding: 10, fontStyle: "italic", padding: Platform.OS === "android" ? "20" : "15" }}>This animated image blinks two versions of a May 11, 2016, selfie of NASA's Curiosity Mars rover at a drilled sample site called "Okoruso." In one version, cameras atop the rover's mast face the arm-mounted camera taking the portrait. In the other, they face away. Credit: NASA/JPL-Caltech/MSSS</Text>
                </View>  
                <View style={styles.container}>
                    {isLoading9 && (
                        <ActivityIndicator style={styles.activity} color={'green'} size={'large'} />
                        )}
                        <Image
                            source={{ uri: "https://spaceplace.nasa.gov/all-about-mars/en/curiosity-mars-rover-panoramas-two-times-of-day.en.jpg" }}
                            style={{ width: 320, height: 310, resizeMode: "cover", borderRadius: 10, marginTop: 20}}
                            onLoadStart={() => setIsLoading9(true)}
                            onLoadEnd={() => setIsLoading9(false)}
                        />
                    <Text style={{ color: "white", padding: 10, fontStyle: "italic", padding: Platform.OS === "android" ? "20" : "15" , marginBottom: 100}}>NASA's Curiosity Mars rover used its black-and-white navigation cameras to capture panoramas at two times of day on April 8, 2023. Credit: NASA/JPL-Caltech</Text>
                </View> 
            </ScrollView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  roverCard: {
    flexDirection: 'column',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative', // Permite posicionar el ActivityIndicator encima de la imagen
  },
  activity: {
    position: 'absolute',  
  }
})