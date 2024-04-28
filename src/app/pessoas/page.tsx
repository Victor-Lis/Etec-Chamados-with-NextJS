import { PersonType } from "../@types/person";

import { ref, get } from "firebase/database";
import { database } from "@/utils/firebaseConfig";

import TableRow from "./components/TableRow";

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
      <table className="w-10/12 min-w-80 mx-auto mt-5">
        <thead>
          <tr className="p-y-2 bg-slate-200 text-blue-600">
            <th className="font-medium text-left pl-1">Nome</th>
            <th className="font-medium text-left">Email</th>
            <th className="font-medium text-left">#</th>
          </tr>
        </thead>
        <tbody>
          {people?.map((person, index) => {
            return (
              <TableRow person={person}/>
            );
          })}
        </tbody>
      </table>
    </main>
  );
}
