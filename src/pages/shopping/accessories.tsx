import HeaderPages from '../../components/components'
import Product from '../../components/shopping.components'
import Footer from '../../components/footer.components'
import Filters from '../../components/filter.components'
import { useState, useEffect } from 'react'
import { FetchUsersData } from '../../../services/Users/UsersServices'
import Link from 'next/link'
import { IProduct } from './clothes'

function Home() {
  const [data, setData] = useState<IProduct>()
  useEffect(() => {
    FetchUsersData().then((data) => {
      setData(data)
    })
  })
  return (
    <div>
      <HeaderPages />
      <div className="goBack">
        <div className="goBackSub">
          <Link href="./home">HOME</Link>
        </div>
      </div>
      <div className="shoppingTitle">Accessories</div>
      <Filters />
      <div className="homeMiddleclothes" id="homeMiddle">
        {data &&
          data
            .filter((a: any) => a.category === 'accessories')
            .map((product: IProduct) => {
              return <Product url={product.image} id={product.ID} name={product.name} price={product.price} />
            })}
      </div>
      <Footer />
    </div>
  )
}

export default Home
