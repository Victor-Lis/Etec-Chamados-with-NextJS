"use client";
import { useEffect, useState } from "react";

import { DeskType } from "../@types/desk";

import Table from "./components/Table";
import InternHeader from "@/components/InternHeader";

import { onValue } from "firebase/database";
import { tableRef } from "@/utils/firebaseConfig";
import { handleSetDesk } from "./utils/handleSetDesk";

export default function Mesas() {
  const [desks, setDesks] = useState<DeskType[]>([]);

  useEffect(() => {
    const unsubscribe = onValue(tableRef, (snapshot) => {
      handleSetDesk({ snapshot: snapshot, setValue: setDesks });
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
      <Table desks={desks} />
    </main>
  );
}
 