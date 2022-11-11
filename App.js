// navigation imports
import { NavigationContainer } from '@react-navigation/native';
import UserNavigation from './navigations/UserNavigation';
import 'react-native-gesture-handler';

// react native packages imports
import { StatusBar } from 'expo-status-bar'; 
import { SafeAreaView } from 'react-native-safe-area-context';

// component imports
import UserNavigationHeader from './components/Header/UserNavigationHeader';

// redux imports
import { store } from './redux/store';
import { Provider } from 'react-redux';
import ChatsStack from './navigations/UserNavigations/ChatsStack';


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* Phone StatusBar */}
        <StatusBar backgroundColor='#156b4d' style='light'/>

        {/* Screen Content */}
        <SafeAreaView className='flex-1'>
          
          {/* Main App Navigation */}
          <ChatsStack />

        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
}