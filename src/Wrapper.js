import Card from './components/Card'; // Карточка товара
import Header from './components/Header'; // Шапка
import Drawer from './components/Drawer'; // Модалка корзина

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
        <Card />
        <Card />
        <Card />
        <Card />
        
      </div>

      </div>
  </div>
  );
}

export default Wrapper;
