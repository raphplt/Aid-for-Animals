import Image from 'next/image'

function Categories(props: any) {
  return (
    <div className="componentCategory">
      <Image src={props.url} alt="image" width={500} height={500} className="imgShoppingHome" />
      <div className="categoryName">{props.name}</div>
    </div>
  )
}

export default Categories
