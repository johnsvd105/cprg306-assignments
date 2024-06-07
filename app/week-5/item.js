

const Item = ({name, quantity, category}) => {

return (
    <li className="p-2 m-4 bg-indigo-600 max-w-sm"> 
        <div className="text-xl">{name}</div>
        <div className="text-base">buy {quantity} in {category}</div>
    </li>
    )
}
export default Item