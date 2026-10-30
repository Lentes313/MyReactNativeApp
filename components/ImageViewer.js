import { StyleSheet, Image } from 'react-native';

export default function ImageViewer({ BgImageSrc }) {
  return (
    <Image
      source={BgImageSrc}
      style={styles.image}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 280,
    height: 200,
    borderRadius: 18,
  },
});