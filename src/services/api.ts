import React from "react";
import axios from "axios";


async function getSalesPerson(){
    const urlTeste = "http://localhost:4000/api/vendedor";
    await axios.get(urlTeste)
    
    .then((response)=>{
        const dataSalesPerson: Record<string,  {name: String,
            lastName: String,  
            phoneNumber: String, 
            address:String,  
            email:String, 
            cpf:String }> = response.data;
    })



    dataSales



    .catch((erro) =>{
        console.log("O erro ocorrido foi: ", erro)

    })

    


}

async function postSalesperson(){

}





export default {getSalesPerson, postSalesperson}