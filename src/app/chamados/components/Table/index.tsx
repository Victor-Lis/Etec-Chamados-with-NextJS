import TableRow from "../TableRow";
import { TicketType } from "@/app/@types/ticket";

export default function Table({tickets}:{tickets: TicketType[]}) {
  return (
    <table className="w-10/12 min-w-80 mx-auto my-5">
      <thead>
        <tr className="p-y-2 bg-slate-200 text-blue-600">
          <th className="font-medium text-left pl-1">Senha</th>
          <th className="font-medium text-left"> P </th>
          <th className="font-medium text-left">Mesa</th>
          <th className="font-medium text-left hidden sm:flex">Atendente</th>
          <th className="font-medium text-left hidden sm:flex"></th>
          <th className="font-medium text-left">#</th>
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
