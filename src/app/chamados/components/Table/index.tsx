import TableRow from "../TableRow";
import { TicketType } from "@/app/@types/ticket";

export default function Table({tickets}:{tickets: TicketType[]}) {
  return (
    <table className="w-10/12 min-w-80 mx-auto my-5">
      <thead>
        <tr className="p-y-2 bg-slate-200 text-blue-600 border-l-2 border-r-2">
          <th className="font-medium text-left border-r-2 pl-1">Senha</th>
          <th className="font-medium text-left border-r-2">P</th>
          <th className="font-medium text-left border-r-2">Mesa</th>
          <th className="font-medium text-left border-r-2 hidden sm:table-cell">Atendente</th>
          <th className="font-medium text-left border-r-2">Responsável</th>
          <th className="font-medium text-left hidden sm:table-cell">#</th>
        </tr>
      </thead>
      <tbody>
        {tickets?.map((ticket, index) => {
          return <TableRow key={ticket.key} ticket={ticket} />;
        })}
      </tbody>
    </table>
  );
}
