import { DeskType } from "@/app/@types/desk";
import ButtonEdit from "../ButtonEdit";
import ButtonExclude from "../ButtonExclude";

export default function TableRow({desk}: {desk: DeskType}) {
  const formatNum = (n: number) => n < 10? "0"+n : n

  return (
    <tr
      key={desk.key}
      className="border-b-2 border-b-slate-200 h-16 last:border-b-0 bg-slate-100"
    >
      <td className="font-medium text-left pl-1">{desk.atendente}</td>
      <td className="font-medium text-left hidden sm:table-cell">{formatNum(desk.numero)}</td>
      <td className="font-medium text-left">
        {/* <ButtonEdit person={person}/> */}
        {/* <ButtonExclude firebaseKey={person.key}/> */}
      </td>
    </tr>
  );
}
