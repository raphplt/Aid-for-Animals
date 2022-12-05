import Link from 'next/link'
import HeaderPages from '../../components/components'
import Footer from '../../components/footer.components'

function Home() {
  return (
    <div className="registerPage">
      <HeaderPages />
      <form>
        <div className="Title" id="subtitle">
          Create a new account
        </div>
        <div className="subfield">
          <div>
            <label htmlFor="inputField" className="inputFieldlabel">
              Last name
            </label>
            <input className="inputField" type="text" name="name" id="name" placeholder="e.g. Doe" required />
          </div>
          <div>
            <label htmlFor="inputField" className="inputFieldlabel">
              First name
            </label>

            <input className="inputField" type="text" name="name" id="name" placeholder="e.g. John" required />
          </div>
        </div>

        <label htmlFor="inputField" className="inputFieldlabel">
          Email
        </label>
        <input
          className="inputField"
          type="email"
          name="email"
          id="email"
          placeholder="e.g. johndoe@gmail.com"
          required
        />
        <label htmlFor="inputField" className="inputFieldlabel">
          Password
        </label>
        <input
          className="inputField"
          type="password"
          name="password"
          id="password"
          placeholder="At least 8 characters"
          required
        />
        <label htmlFor="inputField" className="inputFieldlabel">
          Address
        </label>
        <input
          className="inputField"
          type="text"
          name="address"
          id="streetAddress"
          placeholder="e.g. Avenue des champs Elysée"
          required
        />

        <input
          className="inputField"
          type="text"
          name="address"
          id="streetAddress"
          placeholder="e.g. Street address line 2"
          required
        />
        <div className="subfield">
          <input className="inputField" type="text" name="city" id="city" placeholder="e.g. Paris" />
          <input
            className="inputField"
            type="text"
            name="address"
            id="streetAddress"
            placeholder="e.g. Ile de France"
            required
          />
        </div>
        <div className="subfield">
          <input className="inputField" type="text" name="zipcode" id="zipcode" placeholder="e.g. 75014" required />
          <input className="inputField" type="text" name="country" id="country" placeholder="e.g. France" required />
        </div>
        <div className="terms">
          <input type="checkbox" name="cgu" id="cgu" required className="subterms" />
          <label htmlFor="cgu">I accept the general conditions of use of Aid For Animals.</label>
        </div>

        <button type="submit" className="submitButton">
          Register
        </button>
      </form>
      <div className="linkAccount">
        <Link href="./login"> Or sign in</Link>
      </div>
      <Footer />
    </div>
  )
}

export default Home
