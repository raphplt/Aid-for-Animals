import Image from 'next/image'
import { useRouter } from 'next/navigation'

function Product(props: any) {
  const router = useRouter()
  return (
    <div className="componentProduct">
      <button type="button" onClick={() => router.push(`/shopping/product/${props.id}`)}>
        <Image
          src={require(`../medias/${props.url}.png`)}
          alt="image"
          width={500}
          height={500}
          className="productImage"
        />
      </button>
      <div className="productInfos">
        <div className="productName">{props.name}</div>
        <div className="productPriceInfo">{props.price}€</div>
      </div>
    </div>
  )
}

export default Product
