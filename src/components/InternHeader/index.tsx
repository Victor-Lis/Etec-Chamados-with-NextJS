import ButtonGoBack from "@/components/ButtonGoBack";
import ButtonCreate from "../ButtonCreate";

type HeaderProps = {
  title: string;
  routerPath?: string;
  pathToReturn?: string;
}

export default function InternHeader({title, routerPath, pathToReturn}: HeaderProps) {
  return (
    <header className="w-10/12 min-w-80 mx-auto mt-5 flex justify-between">
      <ButtonGoBack pathToReturn={pathToReturn}/>
      <h2 className="text-2xl font-semibold">{title}</h2>
      {!!routerPath ? <ButtonCreate routerPath={routerPath}/> : <span/>}
    </header>
  );
}
