import HeaderPages from '../../components/components'
import Image from 'next/image'
import shirt from '../../medias/teeshirtblanc.png'
import Footer from '../../components/footer.components'

function ProductPage() {
  return (
    <div>
      <HeaderPages />
      <div className="productCart">
        <Image src={shirt} alt="image" width={500} height={500} className="imageProduct" />
        <div className="productDescription">
          <div className="productCartName">Tee shirt</div>
          <div className="productColor">Color: white</div>
          <div className="productDetails">Material: 100% cotton. Made in France</div>
          <div className="productDesc">
            A comfortable and durable t-shirt to tree your love of animals and support them directly.
          </div>
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
          <div className="productPrice">Price: 24.99€</div>
          <button type="button" className="addToCart">
            Add to cart
          </button>
          <div className="deliveryInfos">France: free delivery from 50€ purchase.</div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ProductPage
