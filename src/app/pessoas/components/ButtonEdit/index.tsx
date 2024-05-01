"use client"
import { FiEdit } from "react-icons/fi";

import { PersonType } from "@/app/@types/person";
import { useRouter } from "next/navigation";

export default function ButtonEdit({person}:{person: PersonType}) {
 const router = useRouter()
 return (
    <button className="mr-3" onClick={() => router.push(`/pessoas/atualizar/${person.key}`)}>
        <FiEdit size={24} color="#006aff" className="hover:scale-110 duration-300 cursor-pointer"/>
    </button>
 );
}