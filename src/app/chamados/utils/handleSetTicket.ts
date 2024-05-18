import { TicketType } from "@/app/@types/ticket";
import { DataSnapshot } from "firebase/database";
import { Dispatch, SetStateAction } from "react";

export async function handleSetTicket({
  snapshot,
  setValue,
}: {
  snapshot: DataSnapshot;
  setValue: Dispatch<SetStateAction<TicketType[]>>;
}) {
  let snapshotVal = await snapshot.val();
  let response: TicketType[] = [];

  if (snapshotVal) {
    let keys: string[] = Object.keys(snapshotVal);
    let data: Omit<TicketType[], "key"> = Object.values(snapshotVal);

    keys.map((key, index) => {
      response.push({
        key,
        
        senha: data[index].senha as unknown as number,
        preferencial: data[index].preferencial as unknown as boolean,

        mesa: data[index].mesa as unknown as number, 
        responsavel: data[index].responsavel as unknown as string,

        atendente: data[index].atendente as unknown as string,
      });
    });
  }
  
  response.sort((a, b) => a.senha - b.senha)
  
  setValue(response);
}
