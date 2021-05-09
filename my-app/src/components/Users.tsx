import React from 'react'
import { User } from '../services/UserService'

interface IUsersProps {
  users: User[]
}

export const Users = ({ users }: IUsersProps) => {
  console.log('users length:::', users.length)
  if (users.length === 0) return null

  const UserRow = (user: User, index: number) => {
    return (
      <tr key={index} className={index % 2 === 0 ? 'odd' : 'even'}>
        <td>{index + 1}</td>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.email}</td>
      </tr>
    )
  }

  const userTable = users.map((user, index) => UserRow(user, index))

  return (
    <div>
      <h2>Users</h2>
      <div className='table-responsive'>
        <table className='table table-bordered table-hover'>
          <thead>
            <tr>
              <th>User Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>{userTable}</tbody>
        </table>
      </div>
    </div>
  )
}
