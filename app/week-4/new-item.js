"use client"
import { useState } from "react"

const newItem = () => {
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

        const item = {
            name: name,
            quantity: quantity,
            category: category
          };
          console.log(item);
          alert(`Added item: ${name}, quantity: ${quantity}, category: ${category}`);
          setName("");
          setQuantity(1)
          setCategory("produce")
        }

    return (
        <main className="flex justify-center w-full">
                <form onSubmit={handleSubmit} className="p-2 m-4  max-w-sm w-full bg-indigo-600 ">
                    <div className="mb-2">
                        <input type="text" value={name} onChange={handleNameChange} required placeholder="Product Name" className="w-full rounded-lg p-2"/>
                    </div>

                    <div className="flex justify-between">
                        <input type="number" min={1} max={99} value={quantity} onChange={handleQuantityChange} required className="w-20 p-2 rounded-lg"/>
                        <select value={category} onChange={handleCategoryChange} className="p-2 rounded-lg">
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
                        {/* not sure how I feel about the color of the submit I think it is okay it might blend in with the rest of the form a bit too much. I would like feedback if possible & a suggestion of what to change it to if I should've changed it*/}
                    </div>
                </form>
        </main>
        )
    }
    

export default newItem;
