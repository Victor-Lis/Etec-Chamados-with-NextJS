import { DeskType } from "@/app/@types/desk";
import { PersonType } from "@/app/@types/person";

import { database, tableRef } from "@/utils/firebaseConfig";
import { push, ref, set, get } from 'firebase/database'

export async function SignUpDesk(desk: Omit<DeskType, "key">){
    let status: boolean = await push(tableRef, desk)
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