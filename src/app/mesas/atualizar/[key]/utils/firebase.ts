import { DeskType } from "@/app/@types/desk";
import { PersonType } from "@/app/@types/person";

import { database, peopleRef } from "@/utils/firebaseConfig";
import { get, push, ref, set } from 'firebase/database'

export async function getDesk({key}:{key: string}){
    const deskRef = ref(database, `mesas/${key}`)
    let desk: Omit<DeskType, "key"> = await get(deskRef)   
    .then((snapshot) => snapshot.val())
    .catch((e) => console.log(e))

    return {
        numero: desk?.numero,
        atendente: desk?.atendente,
        key,
    } as DeskType
}

export async function UpdateDesk({desk, key}:{desk: Omit<DeskType, "key">, key: string}){
    const deskRef = ref(database, `mesas/${key}`)
    let status: boolean = await set(deskRef, desk)
    .then(() => true)
    .catch((err) => {
        console.log(err)
        return false
    })
    return status
}

export async function getPeople(){
    const peopleRef = ref(database, `pessoas`)
    let snapshotVal = await get(peopleRef)   
    .then((snapshot) => snapshot.val())
    .catch((e) => console.log(e))
 
    let people: PersonType[] = Object.values(snapshotVal)
    
    return people
}