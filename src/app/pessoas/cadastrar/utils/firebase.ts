import { PersonType } from "@/app/@types/person";

import { database, peopleRef } from "@/utils/firebaseConfig";
import { push, ref, set } from 'firebase/database'

export async function SignUpPerson(pessoa: Omit<PersonType, "key">){
    let status: boolean = await push(peopleRef, pessoa)
    .then(() => true)
    .catch((err) => {
        console.log(err)
        return false
    })
    return status
}

export async function UpdatePerson({pessoa, key}:{pessoa: Omit<PersonType, "key">, key: string}){
    const personRef = ref(database, `pessoas/${key}`)
    let status: boolean = await set(personRef, pessoa)
    .then(() => true)
    .catch((err) => {
        console.log(err)
        return false
    })
    return status
}