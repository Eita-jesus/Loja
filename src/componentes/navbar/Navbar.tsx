import React from "react";
import './Navbar.css'


async function ListProductGet(){

}


function Navbar(){
    return(

      

        <div >
            <div className="nav">
                <div>Logo</div>

                <div>Login</div>
            </div>

            <div className="nav1">
                <div>Home</div>
                <div>cadastro de Produtos</div>
                <div>Cadastro de Usuários</div>
                <div>Cadastro de vendas</div>
            </div>
        </div>
    );
}

export default Navbar;