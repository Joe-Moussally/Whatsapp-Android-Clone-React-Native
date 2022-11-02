import { NavigationContainer } from '@react-navigation/native';
import UserNavigation from './navigations/UserNavigation';

import { StatusBar } from 'expo-status-bar'; 
import { SafeAreaView } from 'react-native-safe-area-context';


export default function App() {
  return (
    <NavigationContainer>

      {/* Phone StatusBar */}
      <StatusBar backgroundColor='red'/>

      {/* Screen Content */}
      <SafeAreaView className='flex-1'>

        {/* Main App Navigation */}
        <UserNavigation />


      </SafeAreaView>

    </NavigationContainer>
  );
}