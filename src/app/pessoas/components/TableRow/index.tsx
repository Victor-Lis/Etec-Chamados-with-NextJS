import { PersonType } from "@/app/@types/person";

import ButtonEdit from "../ButtonEdit";
import ButtonExclude from "../ButtonExclude";

export default function TableRow({person}: {person: PersonType}) {
  return (
    <tr
      key={person.key}
      className="border-b-2 border-b-slate-200 h-16 last:border-b-0 bg-slate-100"
    >
      <td className="font-medium text-left pl-1">{person.nome}</td>
      <td className="font-medium text-left hidden sm:table-cell">{person.email}</td>
      <td className="font-medium text-left">
        <ButtonEdit person={person}/>
        <ButtonExclude firebaseKey={person.key}/>
      </td>
    </tr>
  );
}
