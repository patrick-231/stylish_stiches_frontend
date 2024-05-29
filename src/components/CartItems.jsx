import React from 'react'
import { ShopContext } from '../context/ShopContext'
import { TbTrash } from "react-icons/tb";

const CartItems = () => {
  const {all_products, cartItems, removeFromCart} = useState(ShopContext)
  return (
    <div>
      <section>
        <div>
          <table>
            <thead>
              <tr>
                <th className='p-1 py-2'>Products </th>
                <th className='p-1 py-2'>Title </th>
                <th className='p-1 py-2'>Price </th>
                <th className='p-1 py-2'>Quatity </th>
                <th className='p-1 py-2'>Total </th>
                <th className='p-1 py-2'>Remove </th>
              </tr>
            </thead>
            <tbody>
              {all_products.map((item) => {
                if(cartItem[e.id] > 0) {
                  return <tr key={e.id}>
                    <td></td>

                  </tr>
                }
              })}
            </tbody>
          </table>
        </div>

      </section>
    </div>
  )
}

export default CartItems