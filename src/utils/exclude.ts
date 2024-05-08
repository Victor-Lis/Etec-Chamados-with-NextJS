import { database } from "@/utils/firebaseConfig";
import { ref, remove } from 'firebase/database'

export async function excludeFromRef({firebaseRef, key}:{firebaseRef: string, key: string}){
    const dbRef = ref(database, `${firebaseRef}/${key}`)
    let status = await remove(dbRef)
    .then(() => true)
    .catch((e) => { 
        console.log(e)
        return false
    })

    return status
}