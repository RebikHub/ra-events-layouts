import React from 'react';
import './App.css';
import Store from './components/Store';
import products from './Products'


function App() {
    return (
    <Store products={products} />
    );
}

export default App;