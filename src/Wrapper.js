import Card from './components/Card'; // Карточка товара
import Header from './components/Header'; // Шапка
import Drawer from './components/Drawer'; // Модалка корзина
import React from 'react';
import axios from 'axios';


function Wrapper() {
    const [items, setItems] = React.useState([]);
    const [cartItems, setCartItems] = React.useState([]);
    const [searchValue, setSearchValue] = React.useState('');
    const [cartOpened, setCartOpened] = React.useState(false);


    // вывод товаров из бд
    React.useEffect(() => {
        axios.get('https://62fd9daeb9e38585cd53f248.mockapi.io/item').then((res) => {
            setItems(res.data);
        });
        axios.get('https://62fd9daeb9e38585cd53f248.mockapi.io/cart').then((res) => {
            setCartItems(res.data);
        });
    }, []);

    // добавление в корзину
    const onAddToCart = (obj) => {
        axios.post('https://62fd9daeb9e38585cd53f248.mockapi.io/cart', obj);
        setCartItems((prev) => [ ...prev, obj]);
    };
    // delete
    const onRemoveItem = (id) => {
        axios.delete(`https://62fd9daeb9e38585cd53f248.mockapi.io/cart${id}`);
        setCartItems((prev) => prev.filter(item => item.id !== id));
    };

    // поиск
    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    };

  return (
    <div className="wrapper">
        { cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem}/> }
      <Header onClickCart={() => setCartOpened(true)}  />

      <div className="content">

        <div className="searchBlock">
          <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки' }</h1>
          <div className="search-bb">
            <img src="/img/search.svg" alt="search" />
              {searchValue && (
                <img
                  onClick={() => setSearchValue('')}
                  className="cart-remove cu-p clear"
                  src="/img/btn-remove.svg" alt="Clear"
                />
              )}
            <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." className="search_input"/>
          </div>
        </div>


          <div className="grid">

              {items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item, index) => (
                  <Card
                    key={index}
                    title={item.title}
                    price={item.price}
                    imageUrl={item.imageUrl}
                    onFavorite={() => console.log('Добавили в закладки')} // доделать
                    onPlus={ (obj) => onAddToCart(obj) }
                  />
              ))}
          </div>

      </div>
  </div>
  );
}

export default Wrapper;
