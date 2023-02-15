import React from 'react'
import classNames from 'classnames'

import Button from '../common/Button'
import { products } from '../assets/MOCK_DATA'

const AdminCard = ({cardData}) => (
  cardData.map(card => (
    <div className='order-card admin' key={card.id}>
      <div className='order-header admin'>
        <p>Order Placed:<br/> <span className="font-small">{card.purchase_date}</span></p>
        <p>Total: <br/> <span className="font-small">{card.total}</span></p>
        <p>Ship To: <br/> <span className="font-small">{card.address}</span></p>
        <div className={
          classNames("status", 
        {pending: card.status === 'Pending'},
        {processed: card.status === 'Processed'},
        {error: card.status === 'Error'},
        )}>{card.status}</div>
      </div>
      <div className='order-body'>
        {products.map(product => {
          if(product.code === card.product) {
            return (
              <>
                <div className='img-container' key={card.id + 'img'}>
                  <img src={product.img} alt="product" />
                </div>
                <div className='details' key={card.id + 'details'}>
                  <h2>User Information:</h2>
                  <p>Name: <br/>{card.first_name} {card.last_name}</p>
                  <p>Customer Id: <br/> {card.customer_id}</p>
                </div>
                <div className='order-actions' key={card.id + 'action'}>
                  <a href="#">Order Number: <br/> {card.order_number} </a>
                  <div>
                    <Button actionText="Contact" type="primary-outline"/>
                    <Button actionText="Process" type="primary" />
                  </div>
                </div>
              </>
            )
          }
        })}
      </div>
    </div>
    ))
)

export default AdminCard