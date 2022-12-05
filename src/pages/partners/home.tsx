import HeaderPages from '../../components/components'
import Footer from '../../components/footer.components'
import Image from 'next/image'
import spa from '../../medias/spa.png'
import amis from '../../medias/30mamis.png'
import sea from '../../medias/seashepherd.png'

export default function Home() {
  return (
    <div className="">
      <HeaderPages />
      <div className="main" id="partnersHome">
        <h1>Our partner associations</h1>
        <h2>
          Since its creation, Aid For Animals has relied on a meticulous selection of partner associations, known for
          their seriousness and commitment.
        </h2>
        <div className="assos">
          <div className="asso">
            <div className="r2d2">
              <a href={'https://www.la-spa.fr'} target="_blank" rel="noopener noreferrer">
                <Image src={spa} alt="spa" width={500} height={500} className="assoImage" />
              </a>
            </div>
            <span>
              <p>
                La SPA est la plus ancienne et la plus grande communauté engagée en faveur de la cause animale. Première
                association de protection animale créée en France en 1845, la Société Protectrice des Animaux (SPA) agit
                quotidiennement pour assurer la protection et la défense des animaux sur l’ensemble du territoire. C’est
                aujourd’hui l’association référente dans le domaine de la protection animale.
              </p>
            </span>
          </div>
          <div className="asso">
            <span>
              <p>
                Fondée en 1977 par le capitaine Paul Watson, SEA SHEPHERD est l’ONG de défense des océans la plus
                combative au monde. Sea Shepherd travaille sur trois axes majeurs : Dépasser la seule protestation et
                intervenir de manière active et non violente dans les cas d’atteintes illégales à la vie marine et aux
                écosystèmes marins.
              </p>
            </span>
            <div className="r2d2">
              <a href={'https://www.30millionsdamis.fr'} target="_blank" rel="noopener noreferrer">
                <Image src={amis} alt="spa" width={500} height={500} className="assoImage" />
              </a>
            </div>
          </div>
          <div className="asso">
            <div className="r2d2">
              <a href={'https://seashepherd.fr'} target="_blank" rel="noopener noreferrer">
                <Image src={sea} alt="spa" width={500} height={500} className="assoImage" />
              </a>
            </div>
            <span>
              <p>
                Lutter contre les abandons, contre l’expérimentation animale et les trafics d’animaux, sensibiliser
                l’opinion, faire évoluer les lois et le statut de l’animal. L'action de la Fondation ne se limite pas
                aux animaux abandonnés et au territoire français. Notre lutte s'impose partout où les animaux souffrent
                et ont besoin de reconnaissance.
              </p>
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
