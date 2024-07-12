import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";



export const getItems = async (userId) => {
    const items = [];
    try {
        const q = query(collection(db,"users",userId, "items"));
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach(doc => {
            items.push({
                id: doc.id,
                data: doc.data()
            });
        });
        return items;
    }
    catch (error) 
    {
        console.error("error fetching item: ", error)
        throw error;
    }
}


export const addItems = async (userId, item) => {
    try {
        const docRef = await addDoc(collection(db,"users",userId,"items"),item)
        return docRef.id;
    }
    catch (error) 
    {
        console.error("error adding item: ", error)
        throw error;
    }


}