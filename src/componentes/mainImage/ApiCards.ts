import React from "react";
import axios from "axios";


async function ProdutosCardsGet(divId: HTMLDivElement) {

    const produtosCardsUrl = "http://localhost:4000/api/vendedor";


    await axios.get(produtosCardsUrl)
    .then((response)=>{
        const dataSalesperson: Record<string, {name: string, lastName: string,
        phoneNumber: string,
        cpf: string,
        email: string,
        address: string}> = response.data;

        const dataSalespersonArray = Object.entries(dataSalesperson).map(
            ([key, value]) => ({
                key,
                ...value
    }));


        var content =""; 
        dataSalespersonArray.forEach((dados) => {

           
           content += `
            <div className="cards">
                <div className="cardImg">
                    <img src = ${dados.name} alt = "" className = "cardImage"></img>        
                </div>

            <div className="cardTitle">
                ${dados.lastName}        
            </div>
            <div className="cardSubTitle">
                ${dados.phoneNumber}        
            </div>
                </div>
           `;  

           console.log("cheguei depois da criacao")
           console.log( "TESTE", content)
   
           divId.innerHTML = content;
        }

    )

    })


    .catch((error) => {
     console.log("O erro ocorrido foi: ", error);
     })
 
}

async function ProdutosCardsPost(){
    return(
        console.log("Funcao post")
    )
}

export default { ProdutosCardsGet, ProdutosCardsPost };