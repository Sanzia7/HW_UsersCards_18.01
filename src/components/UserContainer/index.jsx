import React from 'react'
import User from '../User'
import s from "./style.module.css"

export default function UserContainer() {

   const users = [
      { id: 1, name: 'Ivan', lastname: 'Ushov', age: 30 },
      { id: 2, name: 'Ira', lastname: 'Ursin', age: 32 },
      { id: 3, name: 'Alla', lastname: 'Minova', age: 37 },
      { id: 4, name: 'Max', lastname: 'Berg', age: 41 },
   ]
   return (
      <div className={s.usersWrap}>
         {
            users.map(user => <User key={user.id} {...user} />)
         }
      </div>
   )
}


