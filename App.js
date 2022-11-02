import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';  
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import UserNavigation from './navigations/UserNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor='red'/>
      <SafeAreaView className='flex-1'>
        <UserNavigation />
      </SafeAreaView>
    </NavigationContainer>
  );
}