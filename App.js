import { NavigationContainer } from '@react-navigation/native';
import UserNavigation from './navigations/UserNavigation';
import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar'; 
import { SafeAreaView } from 'react-native-safe-area-context';
import UserNavigationHeader from './components/Header/UserNavigationHeader';


export default function App() {
  return (
    <NavigationContainer>

      {/* Phone StatusBar */}
      <StatusBar backgroundColor='#004d28' style='light'/>

      {/* Screen Content */}
      <SafeAreaView className='flex-1'>
        
        <UserNavigationHeader />
        {/* Main App Navigation */}
        <UserNavigation />


      </SafeAreaView>

    </NavigationContainer>
  );
}