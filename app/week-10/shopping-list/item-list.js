"use client"
import Item from "./item"
import { useEffect, useState } from "react"

const ItemList = ({items, onItemSelect}) => {

  const [sortBy, setSortBy] = useState("name")

  const [sortedItems,setSortedItems] = useState([...items])

  useEffect(() => {
    const sorted =[...items]

    if (sortBy === "name") {
      sorted.sort((a, b) => {
        if (a.name && b.name) {
          return a.name.localeCompare(b.name);
        }
        else {
          return 0;
        }
    });
  }
  else if (sortBy ==="category") {
      sorted.sort((a, b) => {
        if (a.name && b.name) {
          return a.category.localeCompare(b.category);
        }
        else {
          return 0;
        }
      });      
    }
    setSortedItems(sorted);
  },[items,sortBy])


      return (
        <div>
          <div>
          <label>Sort by: </label>
            <button onClick={() => setSortBy("name")} className={`p-2 m-2 w-24 ${sortBy === 'name' ? 'bg-orange-500' : 'bg-orange-700'}`}> Name </button>
            <button onClick={() => setSortBy("category")} className={`p-2 m-2 w-24 ${sortBy === 'name' ? 'bg-orange-700' : 'bg-orange-500'}`}>category</button>
          </div>
          <ul>
            {sortedItems.map((item) => (
            <Item key={item.id}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
              onSelect={() => onItemSelect(item)}
            />
        ))}
        </ul>
        </div>
      )
      
}
export default ItemList