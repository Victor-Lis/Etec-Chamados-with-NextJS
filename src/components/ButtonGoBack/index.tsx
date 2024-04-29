"use client"

import { FiCornerDownLeft } from "react-icons/fi";
import { useRouter } from 'next/navigation'
 
type ButtonGoBackProps = {
  pathToReturn?: string;
}

export default function ButtonGoBack({pathToReturn}: ButtonGoBackProps) {
  const router = useRouter()
  return <FiCornerDownLeft className="hover:scale-110 hover:shadow-2xl duration-300 cursor-pointer" size={30} color="#ff3535" onClick={() => pathToReturn? router.replace(pathToReturn): router.back()}/>;
}