import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import  HomeScreen from './screens/HomeScreen'
import  LoginScreen from './screens/LoginScreen'
import  RegisterScreen from './screens/RegisterScreen'
import  RegisterScreen2 from './screens/RegisterScreen2'
import  RegisterScreen3 from './screens/RegisterScreen3'
import  AddEvent from './screens/AddEvent'
import LoggedIn from './screens/LoggedIn'
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage" headerMode="none">
        <Stack.Screen name="HomePage" component={HomeScreen} />
        <Stack.Screen name="LoginPage" component={LoginScreen} />
        <Stack.Screen name="RegisterPage" component={RegisterScreen} />
        <Stack.Screen name="RegisterPage2" component={RegisterScreen2} />
        <Stack.Screen name="RegisterPage3" component={RegisterScreen3} />
        <Stack.Screen name="AddEvent" component={AddEvent} />
        <Stack.Screen name="LoggedIn" component={LoggedIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;