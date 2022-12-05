import HeaderPages from '../../components/components'
import Footer from '../../components/footer.components'
import graph from '../../medias/graph.png'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="">
      <HeaderPages />
      <div className="main" id="allocation">
        <h1>Allocation</h1>
        <p>
          In the spirit of transparency, Aid For Animals publishes its budget allocation annually. Here is the 2022
          allocation.
        </p>
        <Image src={graph} alt="graph" width={1024} height={768} className="imageAlloc" />
      </div>

      <Footer />
    </div>
  )
}
