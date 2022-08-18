import React from 'react';

function Card({ title, imageUrl, price, onPlus, onFavorite }) {
    const [isAdded, setIsAdded] = React.useState();

    const onClickPlus = () => {
        onPlus({ title, imageUrl, price });
        setIsAdded(!isAdded);
    }

    return(

        <div className="card">

          <div className="favorite" onClick={onFavorite}>
            <img src="/img/unliked.svg" alt="unliked" />
          </div>
          
          <img width={133} height={112} src={imageUrl} alt="image"/>

            <p>{title}</p>

          <div className="d-flex justify-between align-center justify-center gridImg">
              <div className="cardBottom">
                  <p>Цена:</p>
                  <b>{price} руб.</b>
               </div>

              <img  onClick={onClickPlus}
                   src={isAdded ? "/img/button_checked.svg" : "/img/button_notchecked.svg"}
                   alt="plus"
                   className="imgBottom cu-p"
              />


          </div>

        </div>

    )
}

export default Card;