import ItemList from "./item-list"


const Page = () => {
    return (
        <main className=" bg-violet-950">
            <div className="p-3 text-violet-50" >
            <h1 className="font-bold text-3xl py-2">Shopping list</h1>
            <ItemList/>
            </div>
        </main>
    )
}

export default Page