import { DeskType } from "@/app/@types/desk";
import { DataSnapshot } from "firebase/database";
import { Dispatch, SetStateAction } from "react";

export async function handleSetDesk({
  snapshot,
  setValue,
}: {
  snapshot: DataSnapshot;
  setValue: Dispatch<SetStateAction<DeskType[]>>;
}) {
  let snapshotVal = await snapshot.val();
  let response: DeskType[] = [];

  if (snapshotVal) {
    let keys: string[] = Object.keys(snapshotVal);
    let data: Omit<DeskType[], "key"> = Object.values(snapshotVal);

    keys.map((key, index) => {
      response.push({
        key,
        number: data[index].number as unknown as number,
        atendente: data[index].atendente as unknown as string,
      });
    });
  }

  setValue(response);
}
