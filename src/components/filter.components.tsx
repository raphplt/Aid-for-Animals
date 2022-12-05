/* eslint-disable jsx-a11y/label-has-associated-control */
import filter from '../medias/filters.png'
import Image from 'next/image'

function FilterChexbox(props: any) {
  return (
    <div className="box1">
      <input type="checkbox" id={props.name} />
      <label htmlFor={props.name} className="check-box"></label>
      <h4>{props.name}</h4>
    </div>
  )
}

function Filters() {
  const buttonHandler = () => {
    const change: any = document.getElementById('filters')
    if (change.style.display === 'flex') {
      change.style.display = 'none'
    } else {
      change.style.display = 'flex'
    }
  }
  return (
    <div>
      <div id="topBar">
        <button onClick={buttonHandler} className="buttonFilter">
          <div>
            Filters
            <Image src={filter} alt="filter" width={15} height={15} className="filterImage" />
          </div>
        </button>
        <div className="results">
          <div className="resultsNumber">12 </div>result(s)
        </div>
        <input
          type="text"
          id="search"
          name="search"
          className="form-control search"
          placeholder="Search for an item..."
          autoComplete="off"
        />

        <div className="sortBy">
          <h4>Sort by:</h4>
          <div>
            <select className="form-control">
              <option>Most Popular</option>
              <option>Price [Lowest to Highest]</option>
              <option>Price [Highest to Lowest]</option>
              <option>Name [A to Z]</option>
            </select>
          </div>
        </div>
      </div>

      <aside className="filters" id="filters">
        <div id="type">
          <h1>Type</h1>
          <div className="bump">
            <FilterChexbox name="Coat" />
            <FilterChexbox name="Sweaters" />
            <FilterChexbox name="T-shirts" />
            <FilterChexbox name="Pants" />
            <FilterChexbox name="Scarfs" />
            <FilterChexbox name="Test" />
          </div>
        </div>

        <div id="size">
          <h1>Size</h1>
          <div className="bump">
            <FilterChexbox name="XS" />
            <FilterChexbox name="S" />
            <FilterChexbox name="M" />
            <FilterChexbox name="L" />
            <FilterChexbox name="XL" />
            <FilterChexbox name="XXL" />
          </div>
        </div>

        <div id="gender">
          <h1>Gender</h1>
          <div className="bump">
            <FilterChexbox name="Men" />
            <FilterChexbox name="Women" />
            <FilterChexbox name="Kids" />
          </div>
        </div>
      </aside>
    </div>
  )
}

export default Filters
