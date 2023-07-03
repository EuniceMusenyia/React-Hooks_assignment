// import React, { useState } from "react";
// import Details from "../Product_Details";

// const AddProduct = ({onAddedProduct}) => {
//     const [name, setProductName] = useState('');
//     const [price, setProductPrice] = useState ('');

//     const handleSubmit = async (event) =>{
//         event.preventDefault();

//         const data = {
//             title: name,
//         };

//         try {
//             const response = await fetch ('https://dummyjson.com/products/add', {
//                 method: 'POST',
//                 headers : {'content-Type': 'application/json'},
//                 body : JSON.stringify(data),

//             });
//             if (response.ok){
//                 onAddedProduct[data];
//                 setProductName('');
//                 setProductPrice('')
//             }
//             else{
//                 console.error('request failed');
//             }
//             catch (error){
//                 console.error('request failed', error);
//             }
//         }};

//         return (
//             <div>
//                 <h2> Add Product</h2>
//                 <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="Name">Name:</label>
//           <input
//             type="text" id="Name" value={productName}
//             onChange={(event) => setProductName(event.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="Price">Price:</label>
//           <input
//             type="number" id="Price" value={productPrice}
//             onChange={(event) => setProductPrice(event.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">New Product</button>
//       </form>
//             </div>
//         );
//     };
//     export default Details;
// };