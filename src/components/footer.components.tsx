import Link from 'next/link'

function Footer() {
  return (
    <div className="footer">
      <div className="footer-tab">
        <ul>
          <p>Web Pages</p>
          <li>
            <Link href="shopping/home">Shopping Home</Link>
          </li>
          <li>
            <Link href="shopping/books">Books</Link>
          </li>
          <li>
            <Link href="shopping/clothes">Clothes</Link>
          </li>
          <li>
            <Link href="shopping/goodies">Goodies</Link>
          </li>
          <li>
            <Link href="shopping/accessories">Accessories</Link>
          </li>
          <li></li>
        </ul>

        <ul>
          <p>Informations</p>
          <li>
            <Link href="/about/legalnotice">Legal Notice</Link>
          </li>
          <li>
            <Link href="/about/ourstory">Our story</Link>
          </li>
          <li>
            <Link href="/about/whoweare">Who we are </Link>
          </li>
          <li>
            <Link href="/partners/home">Associations</Link>
          </li>
        </ul>
        <ul>
          <p>Contact Us</p>
          <li>
            <a href="https://github.com/raphplt" target={'_blank'}>
              Github (Alexis)
            </a>
          </li>
          <li>
            <a href="https://github.com/raphplt" target={'_blank'}>
              Github (Raphaël)
            </a>
          </li>
          <li>
            <a href="mailto:plassa_r@etna-alternance.net">Email (Alexis)</a>
          </li>
          <li>
            <a href="mailto:plassa_r@etna-alternance.net">Email (Raphaël)</a>
          </li>
        </ul>
        <ul>
          <p>Assistance</p>
          <li>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target={'_blank'}>
              Shipments
            </a>
          </li>
          <li>
            <Link href="/about/sitemap">Sitemap</Link>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target={'_blank'}>
              Returns
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target={'_blank'}>
              Method of payment
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
