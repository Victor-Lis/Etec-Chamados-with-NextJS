import { PersonType } from "@/app/@types/person";
import { DataSnapshot } from "firebase/database";
import { Dispatch, SetStateAction } from "react";

export async function handleSetPeople({snapshot, setValue}:{snapshot: DataSnapshot, setValue: Dispatch<SetStateAction<PersonType[]>>}){
    let snapshotVal = await snapshot.val();
    let keys: string[] = Object.keys(snapshotVal);
    let data: Omit<PersonType[], "key"> = Object.values(snapshotVal);

    let response: PersonType[] = [];
    keys.map((key, index) => {
      response.push({
        key,
        nome: data[index].nome as unknown as string,
        email: data[index].email as unknown as string,
      });
    });
    
    setValue(response)
  }