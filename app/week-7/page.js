"use client"
import ItemList from "./item-list"
import NewItem from "./new-item"
import ItemsData from "./items.json"
import MealIdeas from "./meal-ideas"

import { useState } from "react"

const Page = () => {

    const [items, setItems] = useState(ItemsData);
    const [selectedItemName, setSelectedItemName] = useState("");

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    };

    const handleItemSelected = (selectedItem) => {
        let name = selectedItem.name;
        let cleanedItemName = name.split(',')[0];
        cleanedItemName = cleanedItemName.trim(); 
        cleanedItemName.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g, '');

        setSelectedItemName(cleanedItemName)
    }


    return (
        <main className=" bg-violet-950">
            <div className="p-3 text-violet-50" >
            <h1 className="font-bold text-3xl py-2">Shopping list</h1>
            <h2 className="text-xl">Add New Item</h2>
            <div className="flex">
                <NewItem onAddItem={handleAddItem}/>
                <ItemList items={items} onItemSelect={handleItemSelected}/>
            </div>
            <div className="flex">
                <MealIdeas ingredient={selectedItemName}/>
            </div>

            </div>
        </main>
    )
}

export default Page