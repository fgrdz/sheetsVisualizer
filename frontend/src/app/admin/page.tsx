import UserForm from "@/components/userForm/userForm";
import Link from "next/link";

export default function AdminPage () {
    return(
        <>
            <div className="h-dvh flex flex-col gap-8 text-black bg-rose-50">
                <div className="flex">
                    <p className="text-lg">Usuários</p>
                </div>
                <div className="text-lg">Cadastrar usuário</div>
                <UserForm/>
            </div>
        </>
    )
}