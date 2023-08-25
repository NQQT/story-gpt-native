import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  const webviewProps = {
    source: {
      html: require('../static/index.html'),
    },
    style: {
      flex: 1,
    },
    originWhitelist: ['*'],
    allowUniversalAccessFromFileURLs: true,
    javaScriptEnabledAndroid: true,
  };

  return (
    <WebView {...webviewProps} />
    // <View style={styles.container}>
    //   <StoryboardDisplay />
    //   <StoryboardGenerateButton />
    //   <StatusBar style="auto" />
    // </View>
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
