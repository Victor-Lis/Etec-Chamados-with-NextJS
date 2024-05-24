import { TicketType } from "@/app/@types/ticket";
import ButtonEdit from "@/components/ButtonEdit";
import ButtonExclude from "@/components/ButtonExclude";
import { useEffect } from "react";

export default function TableRow({ticket}: {ticket: TicketType}) {
  const formatNum = (n: number) => n < 10? "0"+n : n
  const formatDate = (date: Date) => `${formatNum(new Date(date).getDay())}/${formatNum(new Date(date).getMonth()+1)}/${new Date(date).getFullYear()}`
  return (
    <tr
      key={ticket.key}
      className={`border-b-2 border-b-slate-200 h-16 last:border-b-0 ${ticket.atendido ? "bg-slate-200/80" : "bg-slate-100"}`}
    >
      <td className={`font-medium text-left pl-1 ${ticket.preferencial && "text-red-600"}`}>{formatNum(ticket.senha)}</td>
      <td className="font-medium text-left">{ticket.mesa}</td>
      <td className="font-medium text-left hidden sm:table-cell">{ticket.atendente}</td>
      <td className={`font-medium text-left ${ticket.preferencial && "text-red-600"}`}>{ticket.responsavel}</td>
      <td className={`font-medium py-2 flex flex-col`}>
        <h2 className="w-full text-bold">{formatDate(ticket.date)}</h2>
        <p className="text-gray-600">{ticket.inicioHora} - {ticket?.fimHora ? ticket?.fimHora : "..."}</p>
      </td>
      <td className="font-medium text-left hidden sm:table-cell">
        <ButtonEdit path="/chamados/atualizar/" itemKey={ticket.key}/>
        <ButtonExclude firebaseRef="chamados/" routeReplace="/chamados" firebaseKey={ticket.key}/>
      </td>
    </tr>
  );
}
