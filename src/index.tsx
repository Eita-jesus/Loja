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


//Import dos Routes
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Layout from './componentes/pages/Layout';
import Home from "./componentes/pages/Home";
import Blogs  from "./componentes/pages/Blogs";
import Contact  from "./componentes/pages/Contact";
import NoPage  from "./componentes/pages/NoPage";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(



  <React.StrictMode>

    <Layout/> 
      {/* <App /> */}
      {/* <Mensagem/><UserInput/>*/}

    <Navbar/>
    <ImageMainHome/> 
    <ProdutosCards/>

  </React.StrictMode>
);


reportWebVitals();
