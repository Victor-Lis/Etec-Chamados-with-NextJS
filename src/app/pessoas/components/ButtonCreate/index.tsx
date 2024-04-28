"use client"
import { FiPlusCircle } from "react-icons/fi";

export default function ButtonCreate() {
 return <FiPlusCircle className="hover:scale-110 hover:shadow-2xl duration-300 cursor-pointer" size={30} color="#00ff11" onClick={() => console.log("click")}/>;
}