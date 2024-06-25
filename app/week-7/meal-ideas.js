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
            const mealIdeas = await fetchMealIdeas(ingredient)
            setMeals(mealIdeas)
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
            <header className="mx-3">
                <h1 className="text-xl font-bold">Meal Ideas</h1>
                <h2>Here are some meal ideas using {ingredient}:</h2>
            </header>
            <ul >
                {meals.map((meal) => (
                    <li key={meal.idMeal} className="p-2 m-3 bg-indigo-600 max-w-sm "> 
                    {/* hover:bg-orange-700 cursor-pointer */}
                        {meal.strMeal}
                    </li>
                ))}
            </ul>
        </div>
    )

}
export default MealIdeas