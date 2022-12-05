import HeaderPages from '../../components/components'
import Footer from '../../components/footer.components'

function Home() {
  return (
    <div>
      <HeaderPages />
      <div className="legalNotice">
        <h1>Sitemap</h1>

        <h2>Shopping</h2>

        <p>Home</p>
        <p>Clothes</p>
        <p>Books</p>
        <p>Accessories</p>

        <h2>Account</h2>

        <p>Login</p>
        <p>Register</p>

        <h2>Partners</h2>

        <p>Home</p>
        <p>Allocations</p>

        <h2>About</h2>

        <p>Legal notice</p>
        <p>Our story</p>
        <p>Who we are</p>
        <p>Sitemap</p>
      </div>
      <Footer />
    </div>
  )
}

export default Home
