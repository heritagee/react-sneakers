import Card from './components/Card'; // Карточка товара
import Header from './components/Header'; // Шапка
import Drawer from './components/Drawer'; // Модалка корзина


const cardNames = [
    {title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 8499, imageUrl: '/img/sneaker.png'},
    {title: 'Мужские Кроссовки Nike Lebron XVIII Low', price: 13999, imageUrl: '/img/sneaker2.jpg',} ,
    {title: 'Мужские Кроссовки Under Armour Curry 8', price: 15199, imageUrl: '/img/sneaker3.jpg'},
    {title: 'Мужские Кроссовки Nike Kyrie 7', price: 11199, imageUrl: '/img/sneaker4.jpg'},
];

function Wrapper() {
  return (
    <div className="wrapper">
      <Drawer />
      <Header />

      <div className="content">

        <div className="searchBlock">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="search" />
            <input placeholder="Поиск..." className="search_input"/>
          </div>
        </div>
        
        
          <div className="d-flex">

              {cardNames.map((obj) => (
                  <Card
                    title={obj.title}
                    price={obj.price}
                    imageUrl={obj.imageUrl}
                  />
              ))}
          </div>

      </div>
  </div>
  );
}

export default Wrapper;
