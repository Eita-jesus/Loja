import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Mensagem from './components/mensagem/Mensagem';
// import UserInput from './components/mensagem/userInput/UserInput';
import Navbar from './componentes/navbar/Navbar';
import ImageMainHome from './componentes/mainImage/ImageMainHome';
// import HomePage from './componentes/produtos/Produtos';
import ProdutosCards from './componentes/produtos/Produtos';






const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Mensagem/><UserInput/>*/}



  <Navbar/>
  <ImageMainHome/>
  <ProdutosCards/>





  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
