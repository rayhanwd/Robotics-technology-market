import React from 'react';
import Products from './components/container/products/Products';
import Header from './components/container/Header/Header';
import Filter from './components/container/Filter/Filter';

function App() {
  document.title = "Robot market | biggest online store";
  return (
    <div className="App">
      <Header/>
      <Filter/>
      <Products/>
    </div>
  );
}

export default App;
