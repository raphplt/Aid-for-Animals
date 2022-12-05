import { useCart } from 'react-use-cart'
import HeaderPages from '../../components/components'
import Image from 'next/image'
import close from '../../medias/close.png'
import remove from '../../medias/remove.png'
import add from '../../medias/add.png'
import Link from 'next/link'

function Home() {
  const { totalUniqueItems, items, updateItemQuantity, removeItem, cartTotal } = useCart()

  return (
    <div>
      <HeaderPages />
      <div className="cartTab" id="cartPage">
        <h1>Cart - {totalUniqueItems} item(s)</h1>

        <ul>
          {items.map((item: any) => (
            <li className="CartItem" id="cartPage" key={item.id}>
              <div className="itemLeft">
                {item.quantity} x {item.name} &ensp; - &ensp; {item.price}€
              </div>
              <div className="cartActions">
                <div className="CartButton">
                  <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>
                    <Image src={remove} alt="basket" width={48} height={48} className="cartImage" />
                  </button>
                </div>
                <div className="CartButton">
                  <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>
                    <Image src={add} alt="basket" width={48} height={48} className="cartImage" />
                  </button>
                </div>
                <div className="CartButton">
                  <button onClick={() => removeItem(item.id)}>
                    <Image src={close} alt="basket" width={48} height={48} className="cartImage" />
                  </button>
                </div>
              </div>
            </li>
          ))}
          <div className="cartTotal" id="cartPage">
            Total : {cartTotal} €
          </div>
          <Link href="/order/payment" className="payment">
            Payment
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default Home
