import * as Linking from 'expo-linking';

const handlePress = async () => {
  let result = await Linking.openURL('https://example.com');
  console.log(result);
};