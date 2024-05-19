"use client"
import Loading from "@/components/Loading";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FiTrash2 } from "react-icons/fi";

import { handleNext } from "../../utils/handleNext";

export default function ButtonNext() {

 const [loading, setLoading] = useState<boolean>(false)

 async function handleNext(){
    setLoading(true)
    let status = await handleNext()
    setLoading(false)
 }

 return (
    <>
        {loading ? 
          <Loading size={24}/> 
        : 
          <button 
            onClick={handleNext} 
            className="hover:opacity-75 duration-300 cursor-pointer bg-blue-600 px-2 rounded-sm text-white">
              Próximo
          </button>
        }
    </>
 );
}