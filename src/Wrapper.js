import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

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
