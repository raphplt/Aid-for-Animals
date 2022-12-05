import HeaderPages from '../components/components'
import Image from 'next/image'
import chien from '../medias/chien1.jpg'
import teeshirt from '../medias/teeshirtblanc.png'
import horse from '../medias/horse.jpg'
import Link from 'next/link'
import Footer from '../components/footer.components'
import partners from '../medias/partners.png'
import factory from '../medias/factory.png'
import us from '../medias/us.png'

function Home() {
  return (
    <div className="indexPage">
      <HeaderPages />
      <div className="mainpage">
        <div className="containerDog">
          <Image src={chien} alt="dog" width={1300} height={867} className="imageChien" />
          <div className="middle">
            <Link className="buttonIndex" href={'./about/ourstory'}>
              Discover our story
            </Link>
          </div>
        </div>
        <div className="mainpageright">
          <p className="citation">«Improve your daily life by supporting animals.»</p>
          <div className="container">
            <Image src={teeshirt} alt="image" width={300} height={300} className="image" />
            <div className="middle">
              <Link className="buttonIndex" id="shopping" href={'./shopping/home'}>
                Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="HorsePage">
        <Image src={horse} alt="↓" width={1920} height={1080} className="horse" />
        <div className="middlehorse">
          <div className="middleText">
            <span className="titleSpan"> Aid for Animals in figures:</span>
            <br />
            <br />
            <span>17,000</span> products sold
            <br />
            <span>5</span> partner associations
            <br />
            <span>320,000</span> € raised
            <br />
            <span>15</span> species saved
            <br />
            <span>1300</span> of pets protected
          </div>
        </div>
      </div>
      <h1 className="discoverh1">Discover more:</h1>
      <div className="indexMore">
        <div className="discover">
          <Link href={'./partners/home'}>
            <Image src={partners} alt="image" width={300} height={300} className="discoverImage" />
          </Link>
          <p>Our partners</p>
        </div>

        <div className="discover">
          <Link href={'./about/ourstory'}>
            <Image src={factory} alt="image" width={300} height={300} className="discoverImage" />
          </Link>

          <p>Our story</p>
        </div>
        <div className="discover">
          <Link href={'./about/whoweare'}>
            <Image src={us} alt="image" width={300} height={300} className="discoverImage" />
          </Link>

          <p>Who we are</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
