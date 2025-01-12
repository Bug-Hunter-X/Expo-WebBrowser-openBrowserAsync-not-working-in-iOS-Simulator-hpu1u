import * as WebBrowser from 'expo-web-browser';

const handlePress = async () => {
  let result = await WebBrowser.openBrowserAsync('https://example.com');
  console.log(result);
};