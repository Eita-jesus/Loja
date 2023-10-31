import React from 'react';
import './NoPage.css';
import ImagemNoPage from '../imagens/Pagina não encontrada.png'


const NoPage = () => {
    return( 
    <div>
      <h1 id ='statusCode' className='statusCode'>404</h1>
        <div id='noPage' className='noPage'>Página não Encontrada</div>
          <img src={ImagemNoPage}></img>
        <div id='noPage' className='noPage'>Não foi possível carregar a página. 
        Seu webSite pode estar ainda em processo de publicação. 
        Caso o problema persista por mais de 10 minutos, por favor entre em contato com o suporte</div>
    </div>);
  };
  
  export default NoPage;