"use client"

import { useEffect, useState } from "react"

 async function fetchMealIdeas(ingredient) {
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;

    try {
        const response = await fetch(url);

        const data = await response.json();

        return data.meals || [];
    } 
    catch (error) {
        console.log(`Error ${error}`)
        return [];
    }

}

const MealIdeas = ({ingredient}) => {
    const [meals, setMeals] = useState([]);

    const loadMealIdeas = async() => {
        try {
            const mealideas = await fetchMealIdeas(ingredient)
            setMeals(mealideas)
        } catch (error) {
            console.error("Error fetching meal ideas:", error);
            setMeals([]);
        }
    }

    useEffect(() => {
        if (ingredient) {
            loadMealIdeas();
        }
    }, [ingredient]);

    return (
        <div>
            <header>
                <h1>Meal Ideas</h1>
                <h2>Here are some meal ideas using {ingredient}:</h2>
            </header>
            <ul>
                {meals.map((meal) => (
                    <li key={meal.idMeal}>
                        {meal.strMeal}
                    </li>
                ))}
            </ul>
        </div>
    )

}
export default MealIdeas