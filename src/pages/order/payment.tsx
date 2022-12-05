import { useCart } from 'react-use-cart'
import HeaderPages from '../../components/components'
import Footer from '../../components/footer.components'

function Home() {
  const { totalUniqueItems, items, cartTotal } = useCart()

  return (
    <div>
      <HeaderPages />
      <div className="cartTab" id="cartPage">
        <h1>Cart - {totalUniqueItems} item(s)</h1>

        <ul>
          {items.map((item: any) => (
            <li className="CartItem" id="cartPage" key={item.id}>
              <div className="item">
                {item.quantity} x {item.name} &ensp; - &ensp; {item.price}€
              </div>
            </li>
          ))}
          <div className="cartTotal" id="cartPage1">
            Total : {cartTotal} €
          </div>
          <div className="paymentInfos">
            <fieldset>
              <legend>Choose a payment method:</legend>

              <div className="payementMethod">
                <input type="radio" id="card" name="payment" value="card" />
                <label htmlFor="card">&ensp;Payment card</label>
              </div>

              <div className="payementMethod">
                <input type="radio" id="paypal" name="payment" value="paypal" />
                <label htmlFor="paypal">&ensp;Paypal</label>
              </div>

              <div className="payementMethod">
                <input type="radio" id="paysafe" name="payment" value="paysafe" />
                <label htmlFor="paysafe">&ensp;PaySafe Card</label>
              </div>
            </fieldset>
            <fieldset>
              <legend>Choose a delivery options:</legend>

              <div className="payementMethod">
                <input type="radio" id="card" name="delivery" value="card" />
                <label htmlFor="card">&ensp;Shipment</label>
              </div>

              <div className="payementMethod">
                <input type="radio" id="store" name="delivery" value="store" />
                <label htmlFor="store">&ensp;In-store pickup</label>
              </div>
            </fieldset>
          </div>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target={'_blank'} className="payment" id="pay">
            Pay
          </a>
        </ul>
      </div>
      <Footer />
    </div>
  )
}

export default Home
