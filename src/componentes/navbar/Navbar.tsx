import React, { useEffect } from "react";
import './Navbar.css'
import logotipo from '../imagens/Hexagon Tech Logo Design Stock (1).jpg'
import { Link } from "react-router-dom";
import Produtos from "../produtos/Produtos";



async function ListProductGet() {

}


function Navbar() {


    useEffect(() => {
        var endereco = document.location.pathname.split("/")[2];


        var divTitulo = document.getElementById("titulo") as HTMLDivElement;


        var divProduto = document.getElementById("produto") as HTMLDivElement;
        var divUsuario = document.getElementById("usuario") as HTMLDivElement;
        var divLogin = document.getElementById("login") as HTMLDivElement;
        var divVenda = document.getElementById("venda") as HTMLDListElement

        console.log(endereco)


        if (endereco === "cadastroDeVenda") {
            divVenda.classList.add("disableLink")

        } else if (endereco === "cadastroDeProdutos") {
            divProduto.classList.add("disableLink")

        } else if (endereco === "cadastroDeUsuario") {
            divUsuario.classList.add("disableLink")

        } else if (endereco === "cadastroDeVenda") {
            divLogin.classList.add("disableLink")
        }

    })




    // if (endereco === "produto"){
    //     divTitulo.innerHTML = "Produto"
    // }else {
    //     divTitulo.innerHTML = "cliente"
    // }

    return (

        <div >
            <div id="titulo"></div>
            <div className="nav" >

                <div className="nav12">
                    <Link to="/home">
                        <div>
                            <img className='logoTipo' src={logotipo} ></img>
                        </div>
                    </Link>
                </div>




                {/* </div>

            <div className="nav1"> */}

                <div className="nav2">

                    <div id="produto">
                        <Link to="/cadastroDeProdutos">
                            <div className="list" >cadastro de Produtos</div>
                        </Link>
                    </div>


                    <div id="usuario">
                        <Link to="/cadastroDeUsuario">
                            <div className="list"  >Cadastro de Usuários</div>
                        </Link>
                    </div>


                    <div id="venda">
                        <Link to="/cadastroDeVenda">
                            <div className="list" >Cadastro de vendas</div>
                        </Link>
                    </div>

                    <div id="login">
                        <Link to="/login">
                            <div className="list" >Login</div>
                        </Link>
                    </div>

                </div>


            </div>
        </div>
    );
}

export default Navbar;