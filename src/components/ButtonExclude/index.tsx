"use client"
import Loading from "@/components/Loading";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FiTrash2 } from "react-icons/fi";

import { excludeFromRef } from "@/utils/exclude";

export default function ButtonExclude({firebaseRef, firebaseKey, routeReplace}:{firebaseRef: string, firebaseKey: string, routeReplace: string}) {

 const [loading, setLoading] = useState<boolean>(false)
 const router = useRouter()

 async function handleExclude(){
    setLoading(true)
    let status = await excludeFromRef({key: firebaseKey, firebaseRef: firebaseRef})
    if(status){
        router.replace(routeReplace)
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