

const Item = ({name, quantity, category}) => {

return (
    <li> 
        <div>{name}</div>
        <div>{quantity}</div>
        <div>{category}</div>
    </li>
    )
}
export default Item