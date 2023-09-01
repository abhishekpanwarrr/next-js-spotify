"use client"

import { Database } from "@/types_db"
interface SuperbaseProvider{
    children:React.ReactNode
}

const SuperbaseProvider:React.FC<SuperbaseProvider> = ({children}) =>{
    return(<>
    {children}</>)
}
export default SuperbaseProvider