import { type ReactNode } from "react"

import UserItem from "./UserItem"

import { type UserType } from "../App"
import Message from "./Message"

type UserListProp = {
    users: UserType[]
    onDeleteUser: (id: number) => void
}

function UserList({ users, onDeleteUser }: UserListProp) {
    if (users.length === 0) {
        return <Message mode="allowed">We don't have user.</Message>
    }

    let textMessage: ReactNode

    if (users.length >= 2) {
        textMessage = <Message mode="not allowed">We have many users</Message>
    }

    return (
        <>
            {textMessage}
            <div className="flex justify-center">
                {users.map(item => (
                    <div key={item.id} className="w-1/2">
                        <UserItem
                            userName={item.userName}
                            id={item.id}
                            onDelete={onDeleteUser}
                        >
                            <p>{item.email}</p>
                        </UserItem>
                    </div>
                ))}
            </div>
        </>
    )
}

export default UserList