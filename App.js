// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeFeed from './src/pages/HomeFeed';
import NewsDetail from './src/pages/NewsDetail';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeFeed} />
        <Stack.Screen name="News" component={NewsDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
