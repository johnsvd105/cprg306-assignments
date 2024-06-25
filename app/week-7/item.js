

const Item = ({name, quantity, category, onSelect}) => {

return (
    <li className="p-2 m-4 bg-indigo-600 max-w-sm hover:bg-orange-700 cursor-pointer" onClick={onSelect}> 
        <div className="text-xl">{name}</div>
        <div className="text-base">buy {quantity} in {category}</div>
    </li>
    )
}
export default Item