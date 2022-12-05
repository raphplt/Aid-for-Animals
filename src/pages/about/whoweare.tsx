import HeaderPages from '../../components/components'
import Image from 'next/image'
import alex from '../../medias/alex.jpeg'
import raph from '../../medias/Raph.jpeg'
import Footer from '../../components/footer.components'

function Home() {
  return (
    <div>
      <HeaderPages />
      <div className="main" id="whoweare">
        <h1>Founders</h1>
        <div className="mainTop">
          <Image src={alex} alt="Alexis" width={300} height={370} className="wwaimage" />
          <div className="wwaText">
            <p>
              « Hello, my name is Alexis, I am 18 years old and I am a beginner fullstack developer and I am currently
              in my first year at ETNA. Computer enthusiast since childhood, I want to improve the experience of all
              users developing new things in different languages such as HTML/CSS, Typescript or MySQL»
            </p>
          </div>
        </div>
        <div className="mainBottom">
          <div className="wwaText">
            <p>
              « Hello, my name is Raphaël, I am 18 years old and I am a novice front-end developer. As a first-year
              student at ETNA in the class of 2022-2026, I have been passionate about the digital world since childhood.
              I create websites using HTML5, CSS3, Javascript, with responsive design. I seek to make the user
              experience more enjoyable and to develop new technologies useful to as many people as possible.»
            </p>
          </div>
          <Image src={raph} alt="Raphaël" width={312} height={370} className="wwaimage" />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
