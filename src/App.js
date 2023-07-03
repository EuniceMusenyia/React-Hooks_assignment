// import Login from './Login';
// import Navbar from './Nav_bar';

// // import Products from './Product'
// import Product_details from './Product_details';


// // import Product_details from './product_details';
// // import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// function App() {
//   return (
//     <div >
//       <Navbar/>
// <BrowserRouter>
// <Routes>
//   <Route path='/Login' element ={<Login/>}></Route>
//   <Route path='Product_details' element={<Product_details/>}/>
//   {/* <Route path='/product/:productId' element ={<Product_details/>}/> */}
//   {/* <Route path='/products' element ={<Products/>}/>
//   <Route path='*' element={<Navigate to='/'/>}/> */}
// </Routes>
// </BrowserRouter>
//     </div>
//   );
// }
// export default App;     


// import logo from './logo.svg';
import  './App.css';
import Products from './Product';
import Login from './Login';
// import Navigation  './Nav_bar';
// import Products from './Product';

function App() {
  return (
    <div className="App">
     <Products/>
     <Login/>
     {/* <Navigation/> */}
     <Products/>

    </div>
  );
}

export default App;
