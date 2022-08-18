import Card from './components/Card'; // Карточка товара
import Header from './components/Header'; // Шапка
import Drawer from './components/Drawer'; // Модалка корзина
import React from 'react';


function Wrapper() {
    const [items, setItems] = React.useState([]);
    const [cartItems, setCartItems] = React.useState([]);
    const [cartOpened, setCartOpened] = React.useState(false);



    React.useEffect(() => {
        fetch('https://62fd9daeb9e38585cd53f248.mockapi.io/items')
            .then((res) => {
                return res.json();
            })
            .then((json) => {
                setItems(json);
            });
        }, []);

    const onAddToCart = (obj) => {
        setCartItems(prev => [ ... prev, obj]);
    };


  return (
    <div className="wrapper">
        { cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} /> }
      <Header onClickCart={() => setCartOpened(true)}  />

      <div className="content">

        <div className="searchBlock">
          <h1>Все кроссовки</h1>
          <div className="search-bb">
            <img src="/img/search.svg" alt="search" />
            <input placeholder="Поиск..." className="search_input"/>
          </div>
        </div>
        
        
          <div className="grid">

              {items.map((item) => (
                  <Card
                    title={item.title}
                    price={item.price}
                    imageUrl={item.imageUrl}
                    onFavorite={() => console.log('Добавили в закладки')}
                    onPlus={ (obj) => onAddToCart(obj) }
                  />
              ))}
          </div>

      </div>
  </div>
  );
}

export default Wrapper;
