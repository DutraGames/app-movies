import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const Drawer = createDrawerNavigator()

import StackRouter from './stack'
import Favorites from '../pages/favorites'
import About from '../pages/About';

function Routers() {
  return (
    <Drawer.Navigator
    screenOptions={{
      headerShown: false,
      drawerStyle:{
        backgroundColor: '#111',
        paddingTop: 20,
      },
      drawerActiveBackgroundColor: '#e72933',
      drawerActiveTintColor: '#fff',
      drawerInactiveTintColor: '#888',
    }}
    >
      <Drawer.Screen name="Home" component={StackRouter}
      options={{
        title: 'Início',
        drawerIcon: ({focused, color, size}) =>(
          <Ionicons name={focused ? 'home' : 'home-outline'} color={color} size={size}/>
        )
      }}
      />
      <Drawer.Screen name="Favorites" component={Favorites} 
      options={{
        title: 'Favoritos',
        drawerIcon: ({focused, color, size}) =>(
          <Ionicons name={focused ? 'heart' : 'heart-outline'} color={color} size={size}/>
        )
      }}
      />
      <Drawer.Screen name="Sobre" component={About} 
      options={{
        title: 'Sobre',
        drawerIcon: ({focused, color, size}) =>(
          <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={size}/>
        )
      }}
      />
    </Drawer.Navigator>
  );
}
export default Routers