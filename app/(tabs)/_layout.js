import { Tabs } from "expo-router";
import { HistoryIcon, HomeIcon, RobotIcon } from "../../components/Icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: { 
          height: 80,
          position: 'absolute',
          borderTopWidth: 0, 
          elevation: 0, 
          shadowOpacity: 0, // Opcional: elimina la sombra en iOS,
          opacity: 0.6,
          backgroundColor: 'black'
        },
        headerShown: false,
        tabBarActiveTintColor: 'green'
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Weather',
          tabBarIcon: ({ color }) => <HomeIcon color={color} />
        }}
      />
      <Tabs.Screen
        name="info"
        options={{
          title: 'Mars info',
          tabBarIcon: ({ color }) => <HistoryIcon color={color} />
        }}
      />
      <Tabs.Screen
        name="roversInfo"
        options={{
          title: 'Rovers Info',
          tabBarIcon: ({ color }) => <RobotIcon color={color} />
        }}
      />
    </Tabs>
  );
}

