// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank" rel="noreferrer">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// src/App.js
// import { useEffect, useState } from 'react';
// import axios from 'axios';

// const App = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {

//     axios.get('https://dummyjson.com/products')
//       .then(response => {
//         setProducts(response.data);
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
//   }, []); 

//   return (
//     <div>
//       <h1>Product Table</h1>
//       <table border="1">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Title</th>
//             <th>Price</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map(product => (
//             <tr key={product.id}>
//               <td>{product.id}</td>
//               <td>{product.title}</td>
//               <td>{product.price}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default App;



import React from 'react';
import Layout from './modules/layout';
import '../src/style/common-style.css'
export default function FixedContainer() {
    return (
        <React.Fragment>
            <Layout />
        </React.Fragment>
    );
}