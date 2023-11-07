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
import { Link } from "react-router-dom";


//Import dos Routes
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
// import Layout from './componentes/pages/Layout';
import Home from "./componentes/home/Home";
// import Blogs  from "./componentes/pages/Blogs";
// import Contact  from "./componentes/pages/Contact";
import NoPage  from "./componentes/noPage/NoPage";
import Login from './componentes/login/Login';
import Produtos from './componentes/produtos/Produtos';
import CadUsuario from './componentes/users/CadUsuario';
import CadVenda from './componentes/cadastroVenda/CadastroVenda';



// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="blogs" element={<Blogs />} />
//           <Route path="contact" element={<Contact />} />
//           <Route path="*" element={<NoPage />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

  <>
  <BrowserRouter basename='CursoSenac'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path= '/cadastroDeProdutos' element={<Produtos/>}/>
        <Route path= '/cadastroDeUsuario' element={<CadUsuario/>}/>
        <Route path= '/cadastroDeVenda' element={<CadVenda/>}/>
        <Route path='/sobre' element={<Navbar/>} />
        <Route path='/esqueciSenha' element={<NoPage/>}/>


        <Route path= '*' element={<NoPage/>}/>
      </Routes>
  </BrowserRouter>
  </>

  //Esse StrictMode é usado apenas para ferramentas do devtools,
  // pois, quando o projeto começa a crescer o index.tsx é usado para rotear as rotas e não renderizar os dados.
  // <React.StrictMode>
  // </React.StrictMode>
);


reportWebVitals();
