import ButtonGoBack from "@/components/ButtonGoBack";
import ButtonCreate from "../ButtonCreate";

export default function Header() {
  return (
    <header className="w-10/12 min-w-80 mx-auto mt-5 flex justify-between">
      <ButtonGoBack/>
      <h2 className="text-2xl font-semibold">Pessoas Autorizadas</h2>
      <ButtonCreate/>
    </header>
  );
}
