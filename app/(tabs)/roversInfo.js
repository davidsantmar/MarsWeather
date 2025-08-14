import {
  ScrollView,
  Text,
  View,
  Platform,
  ImageBackground,
  Image,
  Pressable,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { Link } from "expo-router";
import { useState } from "react";

export default function RoversInfo() {
  const [isLoading1, setIsLoading1] = useState(true);
  const [isLoading2, setIsLoading2] = useState(true);
  const [isLoading3, setIsLoading3] = useState(true);
  const [isLoading4, setIsLoading4] = useState(true);
  const [isLoading5, setIsLoading5] = useState(true);

  return (
    <ImageBackground
      source={require("../../assets/image2.jpg")} // URL de la imagen
      resizeMode="cover"
    >
      <ScrollView style={{ marginTop: 20 }}>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              color: "white",
              fontSize: 26,
              fontWeight: "bold",
            }}
          >
            The Mars Rovers
          </Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              color: "white",
              fontSize: 20,
              padding: Platform.OS === "android" ? "10" : "5",
              fontWeight: "bold",
              marginTop: 20,
            }}
          >
            What are the Mars rovers?
          </Text>
        </View>
        <Text
          style={{
            color: "white",
            fontSize: 20,
            padding: Platform.OS === "android" ? "20" : "15",
            marginTop: 20,
          }}
        >
          Over the years, NASA has sent five robotic vehicles, called rovers, to
          Mars. The names of the five rovers are: Sojourner, Spirit and
          Opportunity, Curiosity, and Perseverance.
        </Text>
        <View style={{ alignItems: "center", justifyContent: "center"}}>
          {isLoading1 && (
            <ActivityIndicator
              style={styles.activity}
              color={"green"}
              size={"large"}
            />
          )}
          <Image
            source={{
              uri: "https://spaceplace.nasa.gov/mars-rovers/en/mars-rovers_metal-plate.en.jpg",
            }}
            style={{
              width: 370,
              height: 160,
              resizeMode: "cover",
              borderRadius: 10,
              marginTop: 20,
            }}
            onLoadStart={() => setIsLoading1(true)}
            onLoadEnd={() => setIsLoading1(false)}
          />
          <Text style={{ color: "white", padding: 10, fontStyle: "italic", padding: Platform.OS === "android" ? "20" : "15"  }}>
            This image depicts all of the rovers which have driven on Mars, as
            well as the Mars helicopter. The artwork is etched onto a metal
            plate attached to the deck of the Mars Perseverance rover. Credit:
            NASA/JPL-Caltech
          </Text>
        </View>
        <Text
          style={{
            color: "white",
            fontSize: 20,
            padding: Platform.OS === "android" ? "20" : "15",
            marginTop: 20,
          }}
        >
          Mars is a fascinating planet. It’s icy cold and covered in reddish
          dust and dirt. Like Earth, it has volcanoes, gullies, and flat plains.
          Scientists can also see channels that look like they were carved by
          rivers and streams a long, long time ago. Over the years, we’ve sent
          four robotic vehicles, or rovers, to learn more about Mars. And NASA’s
          fifth Mars rover, Perseverance, landed on the Red Planet in February
          2021!
        </Text>
        <View style={{ alignItems: "center", marginTop: 20 }}>
          <Text
            style={{
              color: "white",
              fontSize: 26,
              fontWeight: "bold",
            }}
          >
            Meet the team
          </Text>
        </View>
        <Text
          style={{
            color: "white",
            fontSize: 20,
            padding: Platform.OS === "android" ? "20" : "15",
            marginTop: 20,
          }}
        >
          Click on each card below to find out what we’ve learned from each Mars
          rover.
        </Text>
        <View
          style={{
            padding: Platform.OS === "android" ? "10" : "5",
            marginTop: 20,
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Link asChild href="/sojourner">
            <Pressable>
              {({ pressed }) => (
                <View style={styles.container}>
                  {isLoading2 && (
                    <ActivityIndicator
                      style={styles.activity}
                      color={"green"}
                      size={"large"}
                    />
                  )}
                  <Image
                    source={{
                      uri: "https://spaceplace.nasa.gov/mars-rovers/en/sojourner.en.png",
                    }}
                    style={[
                      {
                        width: pressed ? 180 : 200,
                        height: pressed ? 300 : 320,
                      },
                    ]}
                    onLoadStart={() => setIsLoading2(true)}
                    onLoadEnd={() => setIsLoading2(false)}
                  />
                </View>
              )}
            </Pressable>
          </Link>
          <Link asChild href="/spiritOpportunity">
            <Pressable>
              {({ pressed }) => (
                <View style={styles.container}>
                  {isLoading3 && (
                    <ActivityIndicator
                      style={styles.activity}
                      color={"green"}
                      size={"large"}
                    />
                  )}
                  <Image
                    source={{
                      uri: "https://spaceplace.nasa.gov/mars-rovers/en/spirit-opportunity.en.png",
                    }}
                    style={[
                      {
                        width: pressed ? 180 : 200,
                        height: pressed ? 300 : 320,
                      }
                    ]}
                    onLoadStart={() => setIsLoading3(true)}
                    onLoadEnd={() => setIsLoading3(false)}
                  />
                </View>
              )}
            </Pressable>
          </Link>
        </View>
        <View
          style={{
            padding: Platform.OS === "android" ? "10" : "5",
            flexDirection: "row",
            justifyContent: "space-around",
            marginBottom: 10,
          }}
        >
          <Link asChild href="/curiosity">
            <Pressable>
              {({ pressed }) => (
                <View style={styles.container}>
                  {isLoading4 && (
                    <ActivityIndicator
                      style={styles.activity}
                      color={"green"}
                      size={"large"}
                    />
                  )}
                  <Image
                    source={{
                      uri: "https://spaceplace.nasa.gov/mars-rovers/en/curiosity.en.png",
                    }}
                    style={[
                      {
                        width: pressed ? 180 : 200,
                        height: pressed ? 300 : 320,
                      },
                    ]}
                    onLoadStart={() => setIsLoading4(true)}
                    onLoadEnd={() => setIsLoading4(false)}
                  />
                </View>
              )}
            </Pressable>
          </Link>
          <Link asChild href="/perseverance">
            <Pressable>
              {({ pressed }) => (
                <View style={styles.container}>
                  {isLoading5 && (
                    <ActivityIndicator
                      style={styles.activity}
                      color={"green"}
                      size={"large"}
                    />
                  )}
                  <Image
                    source={{
                      uri: "https://spaceplace.nasa.gov/mars-rovers/en/mars2020.en.png",
                    }}
                    style={[
                      {
                        width: pressed ? 180 : 200,
                        height: pressed ? 300 : 320,
                      },
                    ]}
                    onLoadStart={() => setIsLoading5(true)}
                    onLoadEnd={() => setIsLoading5(false)}
                  />
                </View>
              )}
            </Pressable>
          </Link>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              color: "white",
              fontSize: 26,
              fontWeight: "bold",
              marginTop: 30,
            }}
          >
            Why are rovers so important?
          </Text>
        </View>
        <Text
          style={{
            color: "white",
            fontSize: 20,
            padding: Platform.OS === "android" ? "20" : "15",
            marginTop: 20,
          }}
        >
          Since the 1970s, scientists have been sending spacecraft to Mars.
          Several different types of spacecraft have been sent to the Red Planet
          over the years, and they all have different specialties. One type,
          called orbiters, orbit Mars, taking pictures as they zoom around the
          planet. Other spacecraft, called landers, provide photos and
          information from their landing spots on the surface of Mars.
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 20,
            padding: Platform.OS === "android" ? "20" : "15",
            marginTop: 20,
          }}
        >
          Rovers have wheels and specialize in moving around. They land on the
          surface of Mars and drive around to different spots.
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 20,
            padding: Platform.OS === "android" ? "20" : "15",
            marginBottom: 100,
            marginTop: 20,
          }}
        >
          Rovers help scientists in their quest to understand what different
          parts of the planet are made of. Mars is made up of lots of different
          types of rocks, and each rock is made up of a mixture of chemicals. A
          rover can drive around to different areas, studying the different
          chemicals in each rock. These chemicals can tell scientists something
          about the environments that changed that rock over time.
        </Text>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    position: "relative", // Permite posicionar el ActivityIndicator encima de la imagen
  },
  activity: {
    position: "absolute",
  },
});
