
"use client"
import { useForm } from "react-hook-form";
import InputGeneric from "../inputGeneric/inputGeneric";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


// schema

const userFormSchema = z.object({
    nome: z.string().max(100),
    email: z.string().email('E-mail inválido'),
    senha: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
})

type UserFormSchema = z.infer<typeof userFormSchema>

export default function UserForm () {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<UserFormSchema>({
        resolver: zodResolver(userFormSchema)
    });

    const onSubmit = (data: UserFormSchema) => {
        console.log("Dados enviados:", data);
    };

    return(
        <div className="flex flex-col w-[300px]">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col text-black gap-4 p-4">
                <span>Nome</span>
                <InputGeneric id="nome" register={register} />
                {errors.nome && <span className="text-red-500 text-sm">{errors.nome?.message}</span>}
                
                <span>E-mail</span>
                <InputGeneric id="email" register={register}/>
                {errors.email && <span className="text-red-500">{errors.email?.message}</span>}
                
                <span>Senha</span>
                <InputGeneric type="password" id="senha" register={register} />
                {errors.senha && <span className="text-red-500">{errors.senha?.message}</span>}
                
                <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-4">Enviar</button>
            </form>
        </div>
    )
}