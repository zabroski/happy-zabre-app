import { useEffect, useState } from 'react'
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

// const DUMMY_MEALS = [
//   {
//     id: 'm1',
//     name: 'Poulet grille',
//     description: 'Riz and Veggies',
//     price: 3000,
//   },
//   {
//     id: 'm2',
//     name: 'Burkindi',
//     description: 'Riz avec sauce darachide & viande de mouton',
//     price: 2500,
//   },
//   {
//     id: 'm3',
//     name: 'Maman connais la cuisine',
//     description: 'Riz gras poulet, Veggies',
//     price: 4000,
//   },
//   {
//     id: 'Somgande',
//     name: 'Revient',
//     description: 'Spaguetti au soumbala avec Poulet saute',
//     price: 1800,
//   },
// ];

const AvailableMeals = () => {
  
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch('https://happy-backend-default-rtdb.firebaseio.com/meals.json');
      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMeals(loadedMeals);
    };
    fetchMeals();
  }, []);

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;