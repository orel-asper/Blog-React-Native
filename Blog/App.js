import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import indexScreen from './src/screens/indexScreen';
import { Provider } from './src/context/BlogContext';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';




const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider >
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={indexScreen} />
          <Stack.Screen name="Show" component={ShowScreen} />
          <Stack.Screen name="Create Screen" component={CreateScreen} />
          <Stack.Screen name="Edit" component={EditScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;