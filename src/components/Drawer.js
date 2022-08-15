function Drawer() {
    return(
        <div style={{display: 'none'}} className="overlay">

        <div className="drawer">

          <div className="cart-items">
          <h2 className="d-flex justify-between ">Корзина
          <img className="cart-remove cu-p" src="/img/btn-remove.svg" alt="sneakerRemove" />
          </h2>
            <div className="cart-item">
                <div style={{ backgroundImage: 'url(/img/sneaker.png'}} className="cartitemimg">
                
                </div>
                <div className="cart-mr">
                  <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
                  <b>8 499 руб.</b>
                </div>
                <img className="cart-remove" src="/img/btn-remove.svg" alt="sneakerRemove" />
              </div>

              <div className="cart-item">
                <div style={{ backgroundImage: 'url(/img/sneaker.png'}} className="cartitemimg">
                
                </div>
                <div className="cart-mr">
                  <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
                  <b>8 499 руб.</b>
                </div>
                <img className="cart-remove" src="/img/btn-remove.svg" alt="sneakerRemove" />
              </div>

          </div>
          <div className="cart-bottom">
            <ul className="cartblock">

              <li className="d-flex">
                <span>Итого:</span>
                <div></div>
                <b>21 500 руб.</b>
              </li>

              <li className="d-flex">
                <span>Налог 5%:</span>
                <div></div>
                <b>1070 руб.</b>
              </li>
              
            </ul>
            <button className="greenButton">Оформить заказ<img src="/img/strelka.svg" alt="arrow"/></button>
            </div>

        </div>
      </div>
    )
}

export default Drawer;