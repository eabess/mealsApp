import { NavigationContainer, TabRouter } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

import CategoriesScreen from './screen/CategoriesScreen';
import MealDetailScreen from './screen/MealDetailScreen';
import MealsOverviewScreen from './screen/MealsOverviewScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator 
          screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#3f2f25' }
          }}
        >
          <Stack.Screen 
            name='MealsCategories' 
            component={CategoriesScreen} 
            // options={
            //   // { title: 'All Categories' } // static
            //   ({ route, navigation }) => { // dinamic
            //     const catId = route.params.categoryId;
            //     return {
            //       title: catId,
            //     };}}
          />
          <Stack.Screen name='MealsOverview' component={MealsOverviewScreen} />
          <Stack.Screen 
            name='MealDetail' 
            component={MealDetailScreen} 
            // options={{
            //   headerRight: () => {
            //     return <Button title='Tap me!' />
            //   },
            // }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
