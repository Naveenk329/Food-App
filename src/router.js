import React from "react";
import { Button, TouchableOpacity, Text, Image } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RestaurantsScreen from "./components/Restaurants";
import DishesScreen from "./components/Dishes";
import Cart from "./components/Cart";

const RootStack = createStackNavigator({
  Restaurants: {
    screen: RestaurantsScreen,
    navigationOptions: {
      title: "Food Shop"
    }
  },
  Dishes: {
    screen: DishesScreen,
    navigationOptions: {
      title: "Dishes"
    }
  },
  Cart: {
    screen: Cart,
    navigationOptions: {
      title: "Cart",
      headerStyle: {
        elevation: 0,
        shadowOpacity: 0
      }
    }
  }
});
// const Stack = createNativeStackNavigator();
// const RootStack = () =>{
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Food Shop" component={RestaurantsScreen} />
//         <Stack.Screen name="Dishes" component={DishesScreen} />
//         <Stack.Screen name="Cart" component={CartScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

export default createAppContainer(RootStack)
