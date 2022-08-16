import styles from './Card.modules.css';

function Card(props) {

    const onClickButton = () => {
        alert(props.title)
    }

    return(

        <div className="card">

          <div className="favorite">
            <img src="/img/unliked.svg" alt="unliked" />
          </div>
          
          <img width={133} height={112} src={props.imageUrl} alt="image"/>

            <p>{props.title}</p>

          <div className="d-flex justify-between align-center">
              <div className="cardBottom">
                  <p>Цена:</p>
                  <b>{props.price} руб.</b>
               </div>

            <button className="button" onClick={() => onClickButton()}>
              <img width={11} height={11} src="/img/plus.svg" alt="plus"/>
            </button>

          </div>

        </div>

    )
}

export default Card;