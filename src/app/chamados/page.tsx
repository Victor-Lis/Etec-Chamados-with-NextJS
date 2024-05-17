"use client";
import { useEffect, useState } from "react";

import { TicketType } from "../@types/ticket";

import Table from "./components/Table";
import InternHeader from "@/components/InternHeader";

import { onValue } from "firebase/database";
import { ticketsRef } from "@/utils/firebaseConfig";
import { handleSetTicket } from "./utils/handleSetTicket";

export default function Tickets() {
  const [tickets, setTickets] = useState<TicketType[]>([]);

  useEffect(() => {
    const unsubscribe = onValue(ticketsRef, (snapshot) => {
      handleSetTicket({ snapshot: snapshot, setValue: setTickets });
    });

    return () => unsubscribe();
  }, []);

  return (
    <main className="flex items-center flex-col justify-start min-h-[calc(100vh-80px)]">
      <InternHeader
        title="Chamados"
        pathToReturn="/navegacao"
        routerPath="/chamados/cadastrar"
      />
      <Table tickets={tickets} />
    </main>
  );
}