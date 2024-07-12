"use client"
import ItemList from "./item-list"
import NewItem from "./new-item"
import MealIdeas from "./meal-ideas"
import { useUserAuth } from "../_utils/auth-context"
import {getItems, addItems} from "../_services/shopping-list-service"

import { useEffect, useState } from "react"



const Page = () => {

    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState("");

    const {user} = useUserAuth();

    const handleAddItem = async (newItem) => {
        try {
            const newItemId = await addItems(user.uid,newItem);

            newItem.id = newItemId;

            setItems([...items, {id: newItemId, data: newItem}]);
        }
        catch(error) {
            console.error("error adding item:", error);
        }
    };

    const handleItemSelected = (selectedItem) => {
        if(selectedItem) 
        {
            let name = selectedItem.data.name;
            let cleanedItemName = name.split(',')[0];
            cleanedItemName = cleanedItemName.trim(); 
            cleanedItemName = cleanedItemName.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');

            setSelectedItemName(cleanedItemName)
        }
    }
    
    const loadItems = async () => {
        try {
            if (user && user.uid) {
                const userItems = await getItems(user.uid);
                setItems(userItems);
            }
            else {
                console.log("User not logged in. Somehow");
            }
        }
        catch (error) {
            console.error("error loading items: ", error)
        }
    };

    useEffect(() => {
        if(user) {
            loadItems();
        }
    }, [user]);


    return (
        <main className=" bg-violet-950 min-h-screen">
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