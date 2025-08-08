import { ImageBackground } from 'react-native'

export default function SplashScreenView () {
    return (
        <ImageBackground
                source={require('../assets/splash.jpg')} // URL de la imagen
                style={styles.background}
                resizeMode="cover"
                >
            </ImageBackground>
    )
}