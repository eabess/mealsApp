import { useLayoutEffect } from "react";
import { Button, Image, ScrollView, StyleSheet, Text, View } from "react-native";

import IconButton from "../components/IconButton";
import List from "../components/MealDetail/List";
import Subtitle from "../components/MealDetail/Subtitle";

import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/dummy-data";

function MealDetailScreen({ route, navigation }) {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find(( meal ) => meal.id === mealId);

  function headerButtonPressHandler() {
    console.log('Pressed!');
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return ( 
          <IconButton 
            icon='heart-outline'
            color='white'
            onPress={headerButtonPressHandler}
          />
        );
      }
    })
  }, [navigation, headerButtonPressHandler]);

  return (
    <ScrollView style={styles.rootcontainer}>
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <Image  
        source={{ uri: selectedMeal.imageUrl }}
        style={styles.image}
      />
      <MealDetails 
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients:</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps:</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootcontainer: {
    marginBottom: 32
  }, 
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white'
  },
  detailText: {
    color: 'white'
  },
  listOuterContainer: {
    alignItems: 'center'
  },
  listContainer: {
    width: '80%',
  }
})