import { type ReactNode } from "react"

interface UserItemProps {
    userName: string
    children: ReactNode
    id: number
    onDelete: (id: number) => void
}

function UserItem({ userName, children, id, onDelete }: UserItemProps) {
    return (
        <div className='flex flex-wrap justify-center max-w-xl mx-auto my-10 gap-5'>
            <div className='p-4 m-4 text-center bg-slate-800 rounded-md w-2/5'>
                <p className='p-1 font-bold text-lg'>{userName}</p>
                <p>{children}</p>
                <button
                    onClick={() => onDelete(id)}
                    className='px-4 py-2 mt-4 bg-slate-900 text-slate-100 rounded-md'
                >
                    Remove
                </button>
            </div>
        </div>
    )
}

export default UserItem
