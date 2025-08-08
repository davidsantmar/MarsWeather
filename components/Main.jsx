import {
  StyleSheet,
  Text,
  View,
  ImageBackground, 
  ActivityIndicator
} from "react-native";
import { getMarsData } from '../data/data'; 
import { useEffect, useState } from "react";

export function Main () {
    const [marsData, setMarsData] = useState([]);
    const [currentSol, setCurrentSol] = useState(null);
    const day = new Date();
    const [dayFromMonth, setDayFromMonth] = useState(day.getDate());
    const month = new Date();
    const [monthName,setMonthName] = useState(month.toLocaleString('en-EN', { month: 'long' }));
    const [daysInTheWeek, setDaysInTheWeek] = useState([]);
    const getWeekDates = () => {
        const week = [];
        for (let i = 1; i <= 6; i ++) {
          week.push(dayFromMonth + i)
        }
        setDaysInTheWeek([...week]);
      };
    useEffect(() => {
        getMarsData().then((marsData) => {
            setMarsData(marsData);
            setCurrentSol(marsData.sol_keys[0]);
          
        })
        getWeekDates();
    }, [])

    
    return (
        <ImageBackground
        source={require('../assets/image1.jpeg')} // URL de la imagen
        style={styles.background}
        resizeMode="cover"
        >
            <View style={{ alignItems: "center", alignContent: "center", marginTop: 30, marginBottom: 20}}>
                <Text style={styles.head}>Latest weather at Elysium Planitia</Text>
                <Text style={{color: "white", fontSize: 15, marginLeft: 30, marginTop: 20, marginBottom: 10 }}>
                  Daily weather measurements on the surface of Mars Elysium Planitia, a flat, smooth plane near Mars' equator.
                </Text>
            </View>
            <View style={{ flexDirection: "row", marginTop: 20, alignItems: "center" }}>
                <View style={styles.sol_container}>
                    <Text style={{ fontWeight: "bold", color: "white", fontSize: 30}}>Sol {currentSol} </Text>
                    <Text style={{ color: "white", fontSize: 25 }}>{dayFromMonth} {monthName} </Text>
                </View>
                <View style={styles.temp_container}>
                    <Text style={{ color: "white", fontSize: 25, marginBottom: 5 }}>High {marsData && marsData[currentSol]?.AT?.av ? marsData[currentSol].AT.mx.toFixed(1) : 'N/A'}</Text>
                    <Text style={{ color: "white", fontSize: 25}}>Low {marsData && marsData[currentSol]?.AT?.av ? marsData[currentSol].AT.mn.toFixed(1) : 'N/A'}</Text>
                </View>
            </View>
            <View style={styles.forecast}>
                {marsData.sol_keys?.length > 0 ?
                marsData.sol_keys.slice(1,7).map((sol, index) => (
                  <View style={styles.forecast_day} key={sol}>
                    <Text style={{ fontWeight: "bold", color: "white", fontSize: 20 }}>Sol {sol}</Text>
                    <Text style={{ color: "white", fontSize: 20 }}>
                      {daysInTheWeek[index]} {monthName} 
                    </Text>
                    <View style={styles.line} />
                    <Text style={{ color: "white", fontSize: 20, marginBottom: 5 }}>
                      High {marsData[sol]?.AT?.mx ? marsData[sol].AT.mx.toFixed(1) : 'N/A'}
                    </Text>
                    <Text style={{ color: "white", fontSize: 20 }}>
                      Low {marsData[sol]?.AT?.mn ? marsData[sol].AT.mn.toFixed(1) : 'N/A'}
                    </Text>
                  </View>
                )) : (
                  <View style={styles.container}>
                      <ActivityIndicator style={styles.activity} color={'green'} size={'large'}></ActivityIndicator>
                  </View>
                )
              }  
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  head: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
    justifyContent: 'center'
  },
  sol_container: {
    flex: 1,
    alignItems: 'center',
  },
  temp_container: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 24,
    marginTop: 20
  },
  forecast: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 40,
    flexWrap: 'wrap',
    marginLeft: 20
  },
  forecast_day: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'black',
    opacity: 0.5,
    padding: 5,
    borderRadius: 10,
    marginRight: 20,
    marginTop: 20
  },
  line: {
    height: 1, // Grosor de la línea
    backgroundColor: '#ccc', // Color de la línea
    width: '100%', // Ancho completo
    marginVertical: 10, // Espaciado vertical opcional
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative', // Permite posicionar el ActivityIndicator encima de la imagen
    height: 260
  },
  activity: {
    position: 'absolute',  
  }
});

