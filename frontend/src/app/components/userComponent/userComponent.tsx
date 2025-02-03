export default function UserComponent() {
    return(
        <div className='flex items-center gap-4 cursor-pointer'>
            <div className="rounded-full bg-userColor w-[30px] h-[30px] flex justify-center items-center text-sm">U</div>
            <span className="text-black text-sm">Usuário</span>
        </div>
    )
}