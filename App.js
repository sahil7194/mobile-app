import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { Button } from 'react-native-paper';
import { Home } from './Screens/Home';
import { Header } from './Components/Header';

export default function App() {
  return (
    <PaperProvider>
    <View style={styles.container}>
      <Text className="text-red-600">Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
    Press me
  </Button>

      <Home/>
      <Header/>
    </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
