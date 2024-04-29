"use client"
import { FiEdit } from "react-icons/fi";

import { PersonType } from "@/app/@types/person";

export default function ButtonEdit({person}:{person: PersonType}) {

 return (
    <button className="mr-3" onClick={() => {}}>
        <FiEdit size={24} color="#006aff" className="hover:scale-110 duration-300 cursor-pointer"/>
    </button>
 );
}