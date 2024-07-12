"use client"
import ItemList from "./item-list"
import NewItem from "./new-item"
import ItemsData from "./items.json"
import MealIdeas from "./meal-ideas"
import { useUserAuth } from "../_utils/auth-context"

import { useEffect, useState } from "react"



const Page = () => {

    const [items, setItems] = useState(ItemsData);
    const [selectedItemName, setSelectedItemName] = useState("");

    const {user} = useUserAuth();


    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    };

    const handleItemSelected = (selectedItem) => {
        let name = selectedItem.name;
        let cleanedItemName = name.split(',')[0];
        cleanedItemName = cleanedItemName.trim(); 
        cleanedItemName = cleanedItemName.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');

        setSelectedItemName(cleanedItemName)
    }
    


    return (
        <main className=" bg-violet-950 h-screen">
            <div className="p-3 text-violet-50" >
                <div>
                    {!user ? (
                        <div>
                            <h1 className="font-bold text-xl">Not logged in</h1>
                        </div>
                    ) : ( 
                        <div>
                            <h1 className="font-bold text-3xl py-2">Shopping list</h1>
                            <h2 className="text-xl">Add New Item</h2>
                            <div className="flex ">
                                <div className="flex-1 max-w-sm">
                                    <NewItem onAddItem={handleAddItem}/>
                                    <ItemList items={items} onItemSelect={handleItemSelected}/>
                                </div>
                                <div className="flex-1 max-w-sm">
                                    <MealIdeas ingredient={selectedItemName}/>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </main>
    )
}

export default Page