import React, { useState }  from 'react'
import api from '../api'

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll())

  const addClassName = (classNameFromApi) => {
    return 'm-2 badge bg-'  + classNameFromApi
  }

  const createQualities = (arr) => {
    return arr.qualities.map(qualitie => <span key={qualitie._id} className={addClassName(qualitie.color)}>{ qualitie.name}</span>)
  }

  const handleDelete = (userId) => {
    setUsers(prevState => prevState.filter(user => user._id !== userId))
  }

  const createUserList = () => {
    if(users.length === 0) return 'NO users'
    return users.map((user) => {
      return (<tr key={user._id}>
        <td>{user.name}</td>
        <td>{createQualities(user)}</td>
        <td>{user.profession.name}</td>
        <td>{user.completedMeetings}</td>
        <td>{user.rate + '/5'}</td>
        <td><button className='btn btn-danger m-2' onClick={()=>handleDelete(user._id)}>Удалить</button></td>
      </tr>)
    })
  }

  const renderPhrase = () => {
    const count = users.length
    let tempStr = `${count} человек тусанет с тобой сегодня`
    if (count <= 4 && count > 1) tempStr = `${count} человека тусанут с тобой сегодня`
    return <div className={addClassName('primary')}>{ tempStr }</div>
  }

  if (users.length === 0) return <div className={addClassName('danger')}>Никто с тобой не тусанет</div>

  return (
    <>
      {renderPhrase()}
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился, раз</th>
            <th scope="col">Оценки</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {createUserList()}
        </tbody>
      </table>
    </>
  )
}

export default Users