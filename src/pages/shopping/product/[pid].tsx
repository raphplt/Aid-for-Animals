import HeaderPages from '../../../components/components'
import Image from 'next/image'
import Footer from '../../../components/footer.components'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useCart } from 'react-use-cart'
import { fetchProducts } from '../../../../services/Users/ProductsServices'
import { IProduct } from '../clothes'

export interface Iitem {
  id: number
  name: string
  price: any
  quantity: number
}

function ProductPage() {
  const router = useRouter()
  const { pid }: any = router.query
  const [data, setData] = useState<IProduct>()
  useEffect(() => {
    if (pid) {
      fetchProducts(pid).then((data) => {
        setData(data)
      })
    }
  }, [router.isReady])
  const { addItem } = useCart()
  const products: Iitem[] = [
    {
      id: pid,
      name: `${data && data.name}`,
      price: `${data && data.price}`,
      quantity: 1
    }
  ]
  const sizes = () => {
    if (data?.category === 'clothes') {
      return (
        <div className="sizesBox">
          <div className="sizeTitle">Sizes :</div>
          <div className="radio-toolbar">
            <input type="radio" id="radio1" name="radios" value="all" />
            <label htmlFor="radio1">XS</label>
            <input type="radio" id="radio2" name="radios" value="false" />
            <label htmlFor="radio2">S</label>
            <input type="radio" id="radio3" name="radios" value="true" />
            <label htmlFor="radio3">M</label>
            <input type="radio" id="radio4" name="radios" value="true" />
            <label htmlFor="radio4">L</label>
            <input type="radio" id="radio5" name="radios" value="true" />
            <label htmlFor="radio5">XL</label>
            <input type="radio" id="radio6" name="radios" value="true" />
            <label htmlFor="radio6">XXL</label>
          </div>
        </div>
      )
    }
  }
  const infos = () => {
    if (data?.category === 'clothes') {
      return (
        <div>
          <div className="productDetails">Material: 100% cotton. Made in France</div>
        </div>
      )
    }
  }
  return (
    <div>
      <HeaderPages />
      <div className="goBack">
        <div className="goBackSub">
          <Link href="../home">HOME</Link>
        </div>
        /
        <button type="button" onClick={() => router.push(`/shopping/${data?.category}`)}>
          {data?.category.toUpperCase()}
        </button>
      </div>
      <div className="productCart">
        {data && (
          <Image
            src={require(`../../../medias/${data.image}.png`)}
            alt="image"
            width={500}
            height={500}
            className="imageProduct"
          />
        )}
        <div className="productDescription">
          <div className="productCartName">{data && data.name} </div>
          {infos()}
          <div className="productDesc">{data && data.description}</div>
          {sizes()}
          <div className="productPrice">Price: {data && data.price}€</div>
          {products.map((e: any) => (
            <div key={e.id}>
              <button type="button" className="addToCart" onClick={() => addItem(e)}>
                Add to cart
              </button>
            </div>
          ))}
          <div className="homeMiddleclothes" id="homeMiddle"></div>
          <div className="deliveryInfos">France: free delivery from 50€ purchase.</div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ProductPage
