function Head(){
    return(
      <header className="header ">
        <img src={'/react-logo.png'} alt="image not working" width={'40px'} />
        <nav>
    <ul className="nav-list">
      <li className="list-name">Pricing</li>
      <li className="list-name">About</li>
      <li className="list-name">Contact</li>
    </ul>
  </nav>
  </header>
    )
  }

  export default Head;