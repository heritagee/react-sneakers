function Header() {
    return (
        <header>
        <div className="headerLeft">

          <img src="/img/logo.png" />
          <div className="headerInfo">
            <h3>REACT SNEAKERS</h3>
            <p>Магазин лучших кроссовок</p>
          </div>

        </div>

        <ul className="headerRight">
          <li className="li">
          <img width={18} height={18} src="/img/basket.svg" alt="plus"/>

            <span>1200 руб.</span> 
          </li>
          <li className="li">
            
          <img width={18} height={18} src="/img/profile.svg" alt="plus"/>

          </li>
        </ul>
      </header>
    )
}

export default Header;