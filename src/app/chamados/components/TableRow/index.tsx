import { TicketType } from "@/app/@types/ticket";
import ButtonEdit from "@/components/ButtonEdit";
import ButtonExclude from "@/components/ButtonExclude";
import { useEffect } from "react";

export default function TableRow({ticket}: {ticket: TicketType}) {
  const formatNum = (n: number) => n < 10? "0"+n : n
  return (
    <tr
      key={ticket.key}
      className="border-b-2 border-b-slate-200 h-16 last:border-b-0 bg-slate-100"
    >
      <td className="font-medium text-left pl-1 border-l-2 border-r-2">{formatNum(ticket.senha)}</td>
      <td className="font-medium text-left border-r-2">{ticket.preferencial ? "Sim" : "Não"}</td>
      <td className="font-medium text-left border-r-2">{ticket.mesa}</td>
      <td className="font-medium text-left border-r-2 hidden sm:table-cell">{ticket.atendente}</td>
      <td className="font-medium text-left border-r-2">{ticket.responsavel}</td>
      <td className="font-medium text-left hidden sm:table-cell">
        <ButtonEdit path="/mesas/atualizar/" itemKey={ticket.key}/>
        <ButtonExclude firebaseRef="mesas/" routeReplace="/mesas" firebaseKey={ticket.key}/>
      </td>
    </tr>
  );
}
