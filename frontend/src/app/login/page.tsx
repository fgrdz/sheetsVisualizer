"use client"

import { signIn } from "next-auth/react";

export default function Login () {
    const handleLogin = async (e: any) =>{
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const data = {
            email: formData.get("email"),
            password: formData.get("password")
        }

        signIn("credentials",{
            ...data,
            callbackUrl: "/dashboard"
        })
    }

    return(
        <form onSubmit={handleLogin}className="h-screen flex justify-center items-center flex-col">
            <div className="bg-slate-600 p-12 gap-2 rounded-lg w-96 max-w-full flex flex-col justify-center items-center">
                <h1 className="text-xl font-extrabold	 mb-4">Faça seu login</h1>
                <input name="email" type="email" placeholder="E-mail"className="input input-primary"></input>
                <input name="password" type="password" placeholder="Senha"className="input input-primary"></input>
                <button type="submit" className="btn btn-primary text-white">Login</button>
            </div>
        </form>
    )
}