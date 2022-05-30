import axios from "../Config/axios"
import firebase from "../Config/firebase"
export async function getAllProductos(buscar){
    // return axios.get("/sites/MLA/search?q="+buscar) 
    const querySnapshot = await firebase.db.collection("productos").orderBy('name').startAt(buscar).endAt(buscar+'\uf8ff')
    .get()
    return querySnapshot.docs
}
export async function getByIdProductos(id){
    // return axios.get("/items/"+id) 
    return await firebase.db.doc("productos/"+id).get()
}
export async function update(id,data){
    return await firebase.db.doc("productos/"+id).set(data)
}
