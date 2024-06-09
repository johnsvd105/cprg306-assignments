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
          <div>
          <label>Sort by: </label>
            <button onClick={() => setSortBy("name")} className={`p-2 m-2 w-24 ${sortBy === 'name' ? 'bg-orange-500' : 'bg-orange-700'}`}> Name </button>
            <button onClick={() => setSortBy("category")} className={`p-2 m-2 w-24 ${sortBy === 'name' ? 'bg-orange-700' : 'bg-orange-500'}`}>category</button>
          </div>
          <ul>
            {Items.map((item) => (
            <Item key={item.id}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
            />
        ))}
        </ul>
        </div>
      )
      
}
export default ItemList