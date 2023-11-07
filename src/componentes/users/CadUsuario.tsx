import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";

function CadUsuario(){


    return(
        <div>
            {<Navbar/>}
            <div>
                <input type="text" placeholder="Nome"/>
            </div>
            <div>
                <input type="text" placeholder="Sobrenome" />
            </div>
            <div>
                <input type="text" placeholder="Gênero"/>
                    <datalist>

                    </datalist>
            </div>

            <div>
                <div>Data de nascimento</div>
                <input type="date"/>
            </div>
            


{/*             
            <div>
                <div>Nome</div>
                <input type="text" />
            </div>
            <div>
                <div>Nome</div>
                <input type="text" />
            </div> */}


        </div>

    );
    

}

export default CadUsuario; 