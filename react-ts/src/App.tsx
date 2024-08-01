import { useState } from "react"

import UserList from "./components/UserList"
import AddUser from "./components/AddUser"

export type UserType = {
  userName: string
  email: string
  id: number
}

function App() {
  const [users, setUsers] = useState<UserType[]>([])

  function handleAddUsers(userName: string, email: string) {
    setUsers((prevUsers) => {
      const newUser: UserType = {
        id: Math.random(),
        userName,
        email
      }

      return [...prevUsers, newUser]
    })
  }

  function handleDeleteUser(id: number) {
    setUsers((prevUsers) => prevUsers.filter(item => item.id !== id))
  }

  return (
    <div className='py-4 text-center bg-slate-900 text-slate-200 h-screen'>
      <AddUser onAddUser={handleAddUsers} />
      <UserList users={users} onDeleteUser={handleDeleteUser} />
    </div>
  )
}

export default App
