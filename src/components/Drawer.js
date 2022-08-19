function Drawer({onClose, onRemove, items = []}) {

    return(
        <div className="overlay">

        <div className="drawer">

          <div className="cart-items">
          <h2 className="d-flex justify-between ">Корзина
          <img onClick={onClose} className="cart-remove cu-p" src="/img/btn-remove.svg" alt="sneakerRemove" />
          </h2>

            {
              items.length > 0 ? <div className="cart_items_glav">


                {items.map((obj) => (
                    <div className="cart-item">
                      <div style={{ backgroundImage: `url(${obj.imageUrl})`  }} className="cartitemimg">

                      </div>
                      <div className="cart-mr">
                        <p>{obj.title}</p>
                        <b>{obj.price} руб.</b>
                      </div>
                      <img onClick={() => onRemove()} className="cart-remove" src="/img/btn-remove.svg" alt="sneakerRemove" />
                    </div>
                ))}
              </div> : ( <div className="cartEmpty">
              <img width={120} height={120} src="/img/empty.jpg" alt="empty"/>
              <h2>Корзина пустая</h2>
              <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
              <button onClick={onClose} className="greenButton2">
              <img src="/img/strelka2.svg" alt="arrow"/>
              Вернуться назад
              </button>
              </div> )
            }




          </div>


          { items.length > 0 && <div className="cart-bottom">
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
          }


        </div>
      </div>
    )
}

export default Drawer;