import HeaderPages from '../../components/components'
import Footer from '../../components/footer.components'

function Home() {
  return (
    <div>
      <HeaderPages />
      <div className="main" id="ourStory">
        <div className="mainLeft">
          <p>2022</p>
        </div>
        <div className="mainRight">
          <p>
            « We had a project to do in our school, make an ecommerce site. So we thought about making a site where we
            could buy clothes and other items and where all the funds raised would be donated to an association for
            animals. And thus aidforanimals was born. »
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
