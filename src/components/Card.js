function Card() {
    return(
        <div className="card">
          <div className="favorite">
            <img src="/img/unliked.svg" alt="unliked" />
          </div>
          
          <img width={133} height={112} src="/img/sneaker.png" alt="plus"/>
          <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
          <div className="d-flex justify-between align-center">
          <div className="cardBottom">
          <p>Цена:</p>
            <b>8 499 руб.</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/plus.svg" alt="plus"/>
            </button>
          </div>
        </div>
    )
}

export default Card;