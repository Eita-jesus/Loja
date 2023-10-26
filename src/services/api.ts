// import React from "react";
import axios from "axios";

async function GetSalesperson(divId: HTMLDivElement){
    const salesPersonUrl = "http://localhost:4000/api/vendedor";

    await axios.get(salesPersonUrl)
    .then((response) =>{
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

            dataSalespersonArray.forEach((dados) => {

                var newDiv = document.createElement("div")
                
                newDiv.innerHTML = `
                        <div className="cards">
                            <div className="cardImg">
                                <img src = ${dados.name} alt = ""></img>        
                            </div>
                            <div className="cardTitle">
                                ${dados.lastName}        
                            </div>
                            <div className="cardSubTitle">
                                ${dados.phoneNumber}        
                            </div>
                        </div>
                `;

                divId.appendChild(newDiv);
               

            }   
        )


    })

    .catch((error) => {
        console.log("O erro ocorrido foi: ", error);
    })


}


async function PostSalesperson(){

}


export default { GetSalesperson, PostSalesperson };