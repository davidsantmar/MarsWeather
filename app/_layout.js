import { Stack } from 'expo-router';
import { View, StyleSheet } from 'react-native';


export default function Layout () {
    return (
      <>
        <View style={styles.container}>
          <Stack 
            screenOptions={{
              //#e6944f
              headerStyle: { backgroundColor:'#e6944f' },
              headerTitle: "",
              headerBackButtonDisplayMode: "generic", 
              headerBackTitle: "Rovers",
              headerBackTitleVisible : true,
              headerBackVisible: true,
              headerTintColor: "black",
              headerBackVisible: true,                          
            }}/>
           
        </View>
      </>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});