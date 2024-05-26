

const Item = ({name, quantity, category}) => {

return (
    <li className="p-2 m-2"> 
        <div>{name}</div>
        <div>buy {quantity} in {category}</div>
    </li>
    )
}
export default Item