import React from 'react'

import Button from '../common/Button'
import { products } from '../assets/MOCK_DATA'

const UserCard = ({cardData, truncateString}) => (
  cardData.map(card => (
    <div className='order-card' key={card.id}>
      <div className='order-header'>
        <p>Order Placed:<br/> <span className="font-small">{card.purchase_date}</span></p>
        <p>Total: <br/> <span className="font-small">{card.total}</span></p>
        <p>Ship To: <br/> <span className="font-small">{card.address}</span></p>
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
                  <h2>{truncateString(product.name, 60)}</h2>
                  <p>{truncateString(product.description, 200)}</p>
                </div>
                <div className='order-actions' key={card.id + 'action'}>
                  <a href="#">Order Number: <br/> {card.order_number} </a>
                  <div>
                    <Button actionText="Contact Seller" type="primary-outline"/>
                    <Button actionText="Buy Again" type="primary" />
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

export default UserCard