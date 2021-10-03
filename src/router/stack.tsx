import React from "react"
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Home from "../pages/Home";
import Details from "../pages/Details";

const Stack = createNativeStackNavigator()

function StackRouter() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
        <Stack.Screen name="Detalhes" component={Details} options={{headerShown: false}} />
      </Stack.Navigator>
    );
  }
  export default StackRouter