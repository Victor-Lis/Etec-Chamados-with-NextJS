"use client"
import { FiEdit } from "react-icons/fi";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ButtonEdit({path, itemKey}:{path: string, itemKey: string}) {
 const router = useRouter()
 return (
    <button className="mr-3" onClick={() => router.push(`${path}${itemKey}`)}>
        <FiEdit size={24} color="#006aff" className="hover:scale-110 duration-300 cursor-pointer"/>
    </button>
 );
}