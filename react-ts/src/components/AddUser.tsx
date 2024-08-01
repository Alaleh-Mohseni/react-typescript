import { type FormEvent, useRef } from "react"

type AddUserProps = {
    onAddUser: (userName: string, email: string) => void
}

function AddUser({ onAddUser }: AddUserProps) {
    const userName = useRef<HTMLInputElement>(null)
    const email = useRef<HTMLInputElement>(null)

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const newUserName = userName.current!.value
        const newEmail = email.current!.value

        e.currentTarget.reset()

        onAddUser(newUserName, newEmail)
    }

    return (
        <form
            onSubmit={handleSubmit}
            className='flex flex-col gap-5 max-w-xl p-6 my-10 mx-auto bg-slate-800 rounded-md'
        >
            <input
                type='text'
                id='username'
                ref={userName}
                placeholder='Username'
                className='p-2 bg-slate-600 text-slate-300 outline-none rounded-md'
            />
            <input
                type='text'
                id='email'
                ref={email}
                placeholder='Email'
                className='p-2 bg-slate-600 text-slate-300 outline-none rounded-md'
            />
            <button
                type='submit'
                className='px-4 py-2 bg-slate-900 text-slate-100 rounded-md'
            >
                Add User
            </button>
        </form>
    )
}

export default AddUser