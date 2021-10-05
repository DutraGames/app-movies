import React from "react"
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Home from "../pages/Home";
import Details from "../pages/Details";
import Search from "../pages/Search";

const Stack = createNativeStackNavigator()

function StackRouter() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
        <Stack.Screen name="Detalhes" component={Details} options={{headerShown: false}} />
        <Stack.Screen name="Busca" component={Search} options={{title: 'Pesquisa',
      headerTintColor: '#fff',
      headerTitleStyle:{
        color: '#fff',
      },
      headerStyle:{
        backgroundColor: '#090011'
      }
      }} />
      </Stack.Navigator>
    );
  }
  export default StackRouter