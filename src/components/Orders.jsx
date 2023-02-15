import React, {useContext, useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { BiFilter } from 'react-icons/bi'

import Button from '../common/Button'
import Nav from '../common/Nav'
import { LoginContext } from '../context/LoginContext'
import { products } from '../assets/MOCK_DATA'
import AdminCard from './AdminCard';
import UserCard from './UserCard';
import classNames from 'classnames';

const Orders = ()  => {
  const [search, setSearch] = useState()
  const [cardData, setCardData] = useState([])
  const {state} = useContext(LoginContext)
  let navigate = useNavigate();

  useEffect(() => {
    if(!state.username) {
      navigate('/')
    } else {
      setCardData(state.user)
    }
  }, [state.username])

  const handleSearch = () => {
    if(search === '' || search === undefined) {
      setCardData(state.user)
      return
    }
    const regex = new RegExp(".*" + search + ".*", "ig")

    const results = cardData.filter(search => {
      return search.product.match(regex)
    })

    setCardData(results)
  }

  return(
    <>
      <Nav></Nav>
      {!state.admin && 
      <>
      <div className='breadcrumbs'>
          <a href="#">Your Account</a> <span>&gt;</span>
          <a href="#" className='active'>Orders</a>
        </div>
        <h1 className="welcome-message">Welcome {state?.user[0]?.first_name}!</h1>
        </>
      }
      
      <div className={classNames("search-bar", {admin: state.admin})}>
        {state.admin && <button className="icon-button"><BiFilter /></button>}
        <div className='search'>
          <input 
          type="text" 
           placeholder='Search orders'
           value={search}
           onChange={e => setSearch(e.target.value)}
           />
          <Button 
            actionText="Search"
            type="primary"
            handleClick={() => handleSearch()}
          />
        </div>
      </div>
      {state.admin 
      ? <AdminCard cardData={cardData} />
      : <UserCard cardData={cardData} />
      }
    </>
  )

}

export default Orders