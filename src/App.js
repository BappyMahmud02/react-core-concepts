import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}
function Counter(){
  const [count, setCount] = useState(55) ;

  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);
  
  // const increaseCount = () =>{
  //   const newCount = count + 1 ;
  //   setCount(newCount)
  // }
  
  return(
    <div>
      <h1>Count:{count}</h1>
      <button onClick={increaseCount}>increase</button>
      <button onClick={decreaseCount}>decrease</button>
    </div>
  )
}

// const products = [
//   {name:'laptop', price:'22000'},
//   {name:'phone ', price:'23000'},
//   {name:'watch', price:'24000'},
//   {name:'tablet', price:'25000'},
// ]

// {
//   products.map(product => <Product name={product.name} price={product.price}></Product>)
// }
// <Product name='laptop' price='22000'></Product>
// <Product name='Phone' price='10000'></Product>
// <Product name='watch' price='12000'></Product>


function Product(props) {
  return(
    <div className='product'>
      <h3>Name: {props.name}</h3>
      <p>Price: {props.price}</p>
    </div>
  )
}

export default App;
