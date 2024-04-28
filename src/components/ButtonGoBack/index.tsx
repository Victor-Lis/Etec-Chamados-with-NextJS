"use client"

import { FiCornerDownLeft } from "react-icons/fi";
import { useRouter } from 'next/navigation'
 

export default function ButtonGoBack() {
  const router = useRouter()
  return <FiCornerDownLeft className="hover:scale-110 hover:shadow-2xl duration-300 cursor-pointer" size={30} color="#ff3535" onClick={() => router.back()}/>;
}