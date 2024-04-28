"use client"
import { FiTrash2 } from "react-icons/fi";

export default function ButtonDelete() {
 return (
    <button className="mr-3" onClick={() => {}}>
        <FiTrash2 size={24} color="#ff000f" className="hover:scale-110 duration-300 cursor-pointer"/>
    </button>
 );
}