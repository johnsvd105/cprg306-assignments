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
        <main>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={name} onChange={handleNameChange} required/>
                    <input type="number" min={1} max={99} value={quantity} onChange={handleQuantityChange} required/>
                    <select value={category} onChange={handleCategoryChange}>
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
                    <button type="submit">Submit</button>
                </form>
        </main>
        )
    }
    

export default newItem;
