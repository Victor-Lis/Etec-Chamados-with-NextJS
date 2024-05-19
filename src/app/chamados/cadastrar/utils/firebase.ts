import { TicketType } from "@/app/@types/ticket";

import { database, ticketsRef } from "@/utils/firebaseConfig";
import { push, ref, set, get } from 'firebase/database'


async function convertTickets(tickets: any){
    let keys: string[] = Object.keys(tickets)
    let values: Omit<TicketType[], "key"> = Object.values(tickets)
    values.forEach((value, index) => {
        value.key = keys[index]
    })
    return values as TicketType[]
}

export async function SignUpTicket(ticket: Omit<TicketType, "key" | "senha" | "mesa" | "atendente">){
    let tickets: TicketType[] = await get(ticketsRef).then(snapshot => snapshot.val())
    tickets = await convertTickets(tickets)
    let newTicket = {
        responsavel: ticket.responsavel,
        preferencial: ticket.preferencial,
        senha: (!!tickets.length && !!tickets) ? tickets.sort((a,b) => b.senha - a.senha)[0].senha+1 : 1,
        atendido: false,
        atendente: "",
        mesa: "",
    } as Omit<TicketType, "key">
    let status: boolean = await push(ticketsRef, newTicket)
    .then(() => true)
    .catch((err) => {
        console.log(err)
        return false
    })
    return status
}