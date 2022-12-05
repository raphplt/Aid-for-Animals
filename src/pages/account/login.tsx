import Link from 'next/link'
import { useState } from 'react'
import { FetchAuth } from '../../../services/Users/UsersServices'
import HeaderPages from '../../components/components'
import Footer from '../../components/footer.components'
import tee from '../../medias/teeshirtblanc.png'
import Image from 'next/image'

interface Icookie {
  message: string
}

export default function Home() {
  const [data, setData] = useState<Icookie>()
  const [username, setUsername] = useState('null')
  const [password, setPassword] = useState('null')
  const handleSubmit = (event: any) => {
    event.preventDefault()
    setUsername('')
    setPassword('')
    FetchAuth(username, password).then((data) => {
      setData(data)
    })
  }
  const message = data?.message
  if (message === 'Welcome back') {
    return (
      <div className="loginPageC">
        <HeaderPages />
        <div className="welcome" id="1">
          Welcome back !
        </div>
        <Link href={'../shopping/home'} className="goToShopping">
          <Image src={tee} alt="teeshirt" width={500} height={500} className="imagegoToShopping" />
          <p>Let's do some shopping !</p>
        </Link>
        <Footer />
      </div>
    )
  }
  return (
    <div className="loginPage">
      <HeaderPages />
      <form className="loginForm" onSubmit={handleSubmit}>
        <div className="Title" id="subtitle">
          Log in
        </div>
        <div className="message">
          <Link href="./register">New here ? Click here to register</Link>
        </div>
        <label htmlFor="inputField" className="inputFieldlabel">
          Username
        </label>
        <input
          className="inputField"
          type="text"
          name="username"
          id="username"
          placeholder="e.g. John88"
          required
          onChange={(event) => setUsername(event.target.value)}
        />
        <label htmlFor="inputField" className="inputFieldlabel">
          Password
        </label>
        <input
          className="inputField"
          type="password"
          name="password"
          id="password"
          placeholder="e.g. 123456"
          required
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit" className="submitButton" onClick={handleSubmit}>
          Log in
        </button>
        <p className="sorrybro">{message}</p>
      </form>
      <Footer />
    </div>
  )
}
