import React from "react";
import { Link } from "react-router-dom";


function Login (){

    return(
        <div>
            <div>LOGIN</div>
            <input placeholder="login"/>
            <input placeholder="Senha"/>
            <button>Acessar</button>

            <Link to='\esqueciSenha'>Esqueci meu login e senha</Link>


        </div>
    );

}

export default Login;