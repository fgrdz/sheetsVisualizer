
interface InputGenericProps {
    id?: string,
    type?: string,
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    register: any
}

export default function InputGeneric({ id, type, value, onChange, register }: InputGenericProps) {
    return(
        <input
            type={type}
            id={id}
            value={value}
            {...register(id!)}
            className="bg-white text-black p-4 w-[300px] border-none shadow-md focus:outline-none rounded"/>
    )
}