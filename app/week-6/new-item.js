"use client"
import { useState } from "react"

const newItem = ({onAddItem}) => {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const handleNameChange = (event) => {
        setName(event.target.value); 
    }
    
    const handleQuantityChange = (event) => {
        const value = Number(event.target.value);
        setQuantity(value); 
    }
    
    const handleCategoryChange = (event) => {
        setCategory(event.target.value); 
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const idConcat =`${name}${quantity}${category}`; //creates unique id based off all fields

        const item = {
            id: idConcat,
            name: name,
            quantity: quantity,
            category: category
          };
          onAddItem(item)

          //clears the fields
          setName("")
          setQuantity(1)
          setCategory("produce")
        }

    return (
        <main className="flex w-full">
                <form onSubmit={handleSubmit} className="p-2 m-2  max-w-sm w-full bg-indigo-600 rounded-lg">
                    <div className="mb-2">
                        <input type="text" value={name} onChange={handleNameChange} required placeholder="Product Name" className="w-full rounded-lg p-2 text-black placeholder-gray-600"/>
                    </div>

                    <div className="flex justify-between">
                        <input type="number" min={1} max={99} value={quantity} onChange={handleQuantityChange} required className="w-20 p-2 rounded-lg text-black"/>
                        <select value={category} onChange={handleCategoryChange} className="p-2 rounded-lg  text-black">
                            <option value="Produce">Produce</option>
                            <option value="Dairy">Dairy</option>
                            <option value="Bakery">Bakery</option>
                            <option value="Meat">Meat</option>
                            <option value="Frozen Foods">Frozen Foods</option>
                            <option value="Canned Goods">Canned Goods</option>
                            <option value="Dry Goods">Dry Goods</option>
                            <option value="Beverages">Beverages</option>
                            <option value="Snacks">Snacks</option>
                            <option value="Household">Household</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div >
                        <button type="submit" className="w-full bg-blue-600 p-2 mt-2 rounded-lg hover:bg-blue-700 ">Submit</button> 
                    </div>
                </form>
        </main>
        )
    }
    

export default newItem;
