"use client"
import ItemList from "./item-list"
import NewItem from "./new-item"
import ItemsData from "./items.json"

import { useState } from "react"

const Page = () => {

    const [items, setItems] = useState(ItemsData);

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]); // Add newItem to items array
    };


    return (
        <main className=" bg-violet-950">
            <div className="p-3 text-violet-50" >
            <h1 className="font-bold text-3xl py-2">Shopping list</h1>
            <h2 className="text-xl">Add New Item</h2>
            <NewItem onAddItem={handleAddItem}/>
            <ItemList items={items}/>
            </div>
        </main>
    )
}

export default Page