
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ImageViewer from './components/ImageViewer';
import Button from './components/Button';

const BgImage = require('./assets/images/bg-image.png');

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
      Mi primera aplicacion!
      </Text>

      <ImageViewer BgImageSrc={BgImage}/>

      <Button label="Presioname" />

      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    color: '#222222',
  },
  image: {
    width: 280,
    height: 200,
    borderRadius: 20,

  },
} );
