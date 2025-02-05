'use client'
import Link from "next/link";
import { useState } from "react"

export default function UserComponent() {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenMenu = () => {
        setIsOpen(!isOpen); 
    };

    const getUserInitial = (name: string)=>{
        const initialName = name.split('');
        return initialName[0]
    }

    return (
        <>
            <div className="flex items-center gap-4 cursor-pointer">
                <div 
                    className="rounded-full bg-userColor w-[30px] h-[30px] flex justify-center items-center text-sm"
                    onClick={handleOpenMenu}
                >
                    {getUserInitial('Usuário')}
                </div>
                <span className="text-black text-sm">Usuário</span>
            </div>

            {isOpen && (
                <div 
                    className="fixed flex flex-col bg-white shadow-md p-2 rounded-md mt-2"
                    tabIndex={0} 
                    onBlur={() => setIsOpen(false)} 
                >
                    <Link className="text-black cursor-pointer p-2" href={'/admin'}>Administração de usuário</Link>
                    <div className="text-black cursor-pointer p-2">Sair</div>
                </div>
            )}
        </>
    );
}