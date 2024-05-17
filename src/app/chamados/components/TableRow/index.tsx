import { TicketType } from "@/app/@types/ticket";
import ButtonEdit from "@/components/ButtonEdit";
import ButtonExclude from "@/components/ButtonExclude";

export default function TableRow({ticket}: {ticket: TicketType}) {
  const formatNum = (n: number) => n < 10? "0"+n : n
 
  return (
    <tr
      key={ticket.key}
      className="border-b-2 border-b-slate-200 h-16 last:border-b-0 bg-slate-100"
    >
      <td className="font-medium text-left pl-1">{formatNum(ticket.senha)}</td>
      <td className="font-medium text-left">{ticket.preferencial ? "Sim" : "Não"}</td>
      <td className="font-medium text-left">{ticket.mesa}</td>
      <td className="font-medium text-left hidden sm:table-cell">{ticket.atendente}</td>
      <td className="font-medium text-left">{ticket.responsavel}</td>
      <td className="font-medium text-left">
        <ButtonEdit path="/mesas/atualizar/" itemKey={ticket.key}/>
        <ButtonExclude firebaseRef="mesas/" routeReplace="/mesas" firebaseKey={ticket.key}/>
      </td>
    </tr>
  );
}
