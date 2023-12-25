
import { PaperProvider } from 'react-native-paper';
import { Home } from './Screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Scan } from './Screens/Scan';
import { PaymentHistory } from './Screens/PaymentHistory';
import { Account} from './Screens/Account';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function App() {

  const Tab = createBottomTabNavigator();

  return (
    <PaperProvider>

    
    <NavigationContainer>

      <Tab.Navigator
        screenOptions={{
         headerShown: false
        }}
      >
        <Tab.Screen name="Home" component={Home}  
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}/>
        <Tab.Screen name="Scan" component={Scan} 
        options={{
          tabBarLabel: 'Scan',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="qrcode" color={color} size={size} />
          ),
        }}/>
        <Tab.Screen name="Account" component={Account} 
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}/>
        <Tab.Screen name="PaymentHistory" component={PaymentHistory} 
        options={{
          tabBarLabel: 'PaymentHistory',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="history" color={color} size={size} />
          ),
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
    </PaperProvider>
  );
}