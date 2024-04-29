"use client"
import Loading from "@/components/Loading";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FiTrash2 } from "react-icons/fi";

import { excludePerson } from "../../utils/excludePerson";

export default function ButtonExclude({firebaseKey}:{firebaseKey: string}) {

 const [loading, setLoading] = useState<boolean>(false)
 const router = useRouter()

 async function handleExclude(){
    setLoading(true)
    let status = await excludePerson(firebaseKey)
    if(status){
        router.replace("/pessoas")
        router.refresh()
    }
    setLoading(false)
 }

 return (
    <button className="mr-3" onClick={handleExclude}>
        {loading ? <Loading size={24}/> : <FiTrash2 size={24} color="#ff000f" className="hover:scale-110 duration-300 cursor-pointer"/>}
    </button>
 );
}