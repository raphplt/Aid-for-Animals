import Link from 'next/link'
import Image from 'next/image'
import logo from '../medias/logo.png'
import expand from '../medias/expand.png'
import basket from '../medias/basket.png'
import menuHamb from '../medias/menuHamb.png'
import user from '../medias/user.png'
import close from '../medias/close.png'
import remove from '../medias/remove.png'
import add from '../medias/add.png'
import { useCart } from 'react-use-cart'

const Logo = () => {
  return (
    <div className="siteName">
      <div className="logoLeft">
        <Link href="/">
          <Image src={logo} alt="logo" width={50} height={50} className="logosite" />
        </Link>
      </div>
      <Link href="/">
        <div className="logoRight">Aid for Animals</div>
      </Link>
    </div>
  )
}

const Navbar = () => {
  const { totalUniqueItems, items, updateItemQuantity, removeItem, cartTotal } = useCart()
  // Cart items
  const buttonHandler = () => {
    const change: any = document.getElementById('HambContainer')
    if (change.style.display === 'block') {
      change.style.display = 'none'
      change.style.opacity = '0'
    } else {
      change.style.opacity = '.9'
      change.style.display = 'block'
    }
  }
  const basketHandler = () => {
    const change: any = document.getElementById('shoppingCart')
    if (change.style.display === 'block') {
      change.style.display = 'none'
    } else {
      change.style.display = 'block'
    }
  }
  return (
    <div className="topRight">
      <nav className="navbar">
        <ul className="menu">
          <li>
            <div className="menuName">
              <Link href="/shopping/home">Shopping</Link>
              <Image src={expand} alt="↓" width={20} height={20} />
            </div>
            <ul className="sub-menu">
              <li>
                <Link href="/shopping/home">Home</Link>
              </li>
              <li>
                <Link href="/shopping/clothes">Clothes</Link>
              </li>
              <li>
                <Link href="/shopping/books">Books</Link>
              </li>
              <li>
                <Link href="/shopping/accessories">Accessories</Link>
              </li>
            </ul>
          </li>
          <li>
            <div className="menuName">
              <Link href="/account/register">Partners</Link>
              <Image src={expand} alt="↓" width={20} height={20} />
            </div>
            <ul className="sub-menu">
              <li>
                <Link href="/partners/home">Partners</Link>
              </li>
              <li>
                <Link href="/partners/allocation">Allocation</Link>
              </li>
            </ul>
          </li>
          <li>
            <div className="menuName">
              <Link href="/about/ourstory">About</Link>
              <Image src={expand} alt="↓" width={20} height={20} />
            </div>
            <ul className="sub-menu">
              <li>
                <Link href="/about/ourstory">Our story</Link>
              </li>
              <li>
                <Link href="/about/whoweare">Who we are</Link>
              </li>
              <li>
                <Link href="/about/legalnotice">Legal notice</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <div className="rightHeader">
        <div className="menuName" id="basket">
          <button onClick={basketHandler}>
            <Image src={basket} alt="basket" width={25} height={25} className="basketImage" />
          </button>
          <div className="shoppingCart" id="shoppingCart">
            <div className="cartTab">
              <h1>Cart - {totalUniqueItems} item(s)</h1>

              <ul>
                {items.map((item: any) => (
                  <li className="CartItem" key={item.id}>
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
                <div className="cartTotal">
                  Total : <strong>{cartTotal} €</strong>
                </div>
                <div className="cartgoBuy">
                  <Link href="/order/cart">View Cart</Link>
                </div>
              </ul>
            </div>
          </div>
          <div className="userBox">
            <Link href="/account/login">
              <Image src={user} alt="logo" width={25} height={25} className="userImage" />
            </Link>
          </div>
        </div>

        <div className="menuHamburger">
          <button onClick={buttonHandler}>
            <Image src={menuHamb} alt="basket" width={25} height={25} className="menuHambLogo" />
          </button>
          <div className="HambContainer" id="HambContainer">
            <Link href="/shopping/home">
              <div className="subMenuHamburger">Shopping</div>
            </Link>
            <Link href="/partners/home">
              <div className="subMenuHamburger">Partners</div>
            </Link>
            <Link href="/about/whoweare">
              <div className="subMenuHamburger">About</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

const HeaderPages = () => {
  return (
    <div className="header">
      <title>Aid For Animals</title>
      <Logo />
      <Navbar />
    </div>
  )
}

export default HeaderPages
