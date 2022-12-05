import HeaderPages from '../../components/components'
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import carousel1 from '../../medias/carousel1.jpg'
import carousel2 from '../../medias/carousel2.jpg'
import carousel3 from '../../medias/carousel3.jpg'
import Image from 'next/image'
import Footer from '../../components/footer.components'
import Link from 'next/link'
import Categories from '../../components/category.components'
import Phone from '../../medias/phone.png'
import Book from '../../medias/book.png'
import Shirt from '../../medias/shirt.png'

function Home() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])
  return (
    <div>
      <HeaderPages />
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <Image src={carousel1} alt="dog" width={1920} height={1080} className="carouselSlide" />
          </div>
          <div className="embla__slide">
            <div className="embla__slide">
              <Image src={carousel2} alt="dog" width={1920} height={1080} className="carouselSlide" />
            </div>
          </div>
          <div className="embla__slide">
            <div className="embla__slide">
              <Image src={carousel3} alt="dog" width={1920} height={1080} className="carouselSlide" />
            </div>
          </div>
        </div>
      </div>
      <Link href="#homeMiddle">
        <div className="homeText">Welcome to our shop. Discover all our products ➜</div>
      </Link>
      <div className="homeMiddle" id="homeMiddle">
        <Link href="./clothes">
          <Categories url={Shirt} name="Clothes" />
        </Link>
        <Link href="./books">
          <Categories url={Book} name="Books" />
        </Link>
        <Link href="./accessories">
          <Categories url={Phone} name="Accessories" />
        </Link>
      </div>
      <Footer />
    </div>
  )
}

export default Home
