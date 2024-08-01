import { type PropsWithChildren, type FC } from "react"

type UserItemProps = PropsWithChildren<{ userName: string }>

const UserItem: FC<UserItemProps> = ({ userName, children }) => {
    return (
        <div className='flex flex-wrap justify-center max-w-xl mx-auto my-10 gap-5'>
            <div className='p-4 m-4 text-center bg-slate-800 rounded-md w-2/5'>
                <p className='p-1 font-bold text-lg'>{userName}</p>
                <p>{children}</p>
                <button
                    className='px-4 py-2 mt-4 bg-slate-900 text-slate-100 rounded-md'
                >
                    Remove
                </button>
            </div>
        </div>
    )
}

export default UserItem
