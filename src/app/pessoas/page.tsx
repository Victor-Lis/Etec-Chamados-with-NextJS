import { PersonType } from "../@types/person";

import { ref, get } from "firebase/database";
import { database } from "@/utils/firebaseConfig";

import Table from "./components/Table";
import Header from "./components/Header";

export default async function Pessoas() {
  async function getPeople() {
    const peopleRef = ref(database, "pessoas/");

    const data: PersonType[] = await get(peopleRef)
    .then(async (snapshot) => {
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
      
      return response;
    })
    .catch(err => {
      console.log(err)
      return []
    })

    return data;
  }

  const people = await getPeople();

  return (
    <main className="flex items-center flex-col justify-start min-h-[calc(100vh-80px)]">
      <Header/>
      <Table people={people}/>
    </main>
  );
}
