import React from "react";
import './Navbar.css'
import logotipo from '../imagens/Hexagon Tech Logo Design Stock (1).jpg'
import { Link } from "react-router-dom";


async function ListProductGet(){

}


function Navbar(){
    return(

      

        <div >
            <div className="nav">
                
                <Link to="/home">
                    <img className='logoTipo' src={logotipo} ></img>
                </Link>

                <Link to="/login">
                    <div>Login</div>
                </Link>
                
                
            </div>

            <div className="nav1">

                <Link to="/cadastroDeProdutos">
                    <div>cadastro de Produtos</div> 
                </Link>

                
                <Link to="/cadastroDeUsuario">
                    <div>Cadastro de Usuários</div>
                </Link>

                
                <Link to="/cadastroDeVenda">
                    <div>Cadastro de vendas</div>
                </Link>
 
            </div>
        </div>
    );
}

export default Navbar;