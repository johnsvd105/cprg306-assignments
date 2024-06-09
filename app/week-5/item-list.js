"use client"
import Item from "./item"
import { useState } from "react"
import Items from "./items.json"

const ItemList = () => {

  const [sortBy, setSortBy] = useState("name")

  if (sortBy == "name") {
     Items.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (sortBy =="category") {
    Items.sort((a, b) => a.category.localeCompare(b.category));
  }

      return (
        <div>
            <button onClick={() => setSortBy("name")}>Sort by Name</button>
            <button onClick={() => setSortBy("category")}>Sort by Category</button>

            {Items.map((item,index) => (
            <ul>
            <Item key={index}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
            />
            </ul>
        ))}
        </div>
      )
      
}
export default ItemList