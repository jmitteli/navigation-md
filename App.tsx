import { StatusBar } from 'expo-status-bar'
import { PaperProvider } from 'react-native-paper'
import HomeScreen from './screens/HomeScreen'
import SecondScreen from './screens/SecondScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CustomNavigationBar from './components/CustomNavigationBar'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
        screenOptions={{
          title: "MD Nav Demo",
          header: (props) => <CustomNavigationBar{...props} />,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Second" component={SecondScreen} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};

