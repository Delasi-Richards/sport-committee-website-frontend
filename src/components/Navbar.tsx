function Navbar() {
  return (
    <nav className="py-1 bg-red text-white">
      <div className="flex items-center justify-between">
        <div className="ml-5 mr-9 items-center text-2xl">
          <img src="src/assets/navbar-logo.svg" width="32" height="32" />
        </div>
        <ul className="flex gap-4 mr-auto text-medium">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/football">Football</a>
            </li>
          <li>
            <a href="#">Basketball</a>
            </li>
          <li>
            <a href="#">Volleyball</a>
            </li>
        </ul>
        <form className="flex ml-2 mr-5">
          <input id="search" className="py-0.5 px-1 border border-white rounded-l-lg rounded-r-none focus:outline-none focus:bg-red-focus" type="search" placeholder="Search" aria-label="Search"/>
          <button className="p-0.5 border border-white border-l-0 rounded-l-none rounded-r-lg focus:bg-red-focus" type="submit" onClick={()=>{}}>
            <img src="src/assets/search-icon.svg" width="24" height="24" />
          </button>
        </form>
      </div>
    </nav>
  )
}

export default Navbar