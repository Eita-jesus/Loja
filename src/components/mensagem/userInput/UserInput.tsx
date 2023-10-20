import React from "react";
import axios from "axios";
import './UserInput.css';
import { resolve } from "path";



async function UserDataGet(){

    var userNameInput = document.getElementById("userName") as HTMLInputElement || null;
    var userLastNameInput = document.getElementById("userLastName") as HTMLInputElement || null;
    var userPhoneNumberInput = document.getElementById("userPhoneNumber") as HTMLInputElement || null;
    var userAdressInput = document.getElementById("userAdress") as HTMLInputElement || null;
    var userEmailInput = document.getElementById("userEmail") as HTMLInputElement || null;
    var userCpfInput = document.getElementById("userCpf") as HTMLInputElement || null;

    var salesPersonUrl = "http://localhost:4000/api/vendedor";
    
    var userDateJson = {
        
        "name" :userNameInput.value.toString(),
        "lastName" :userLastNameInput.value.toString(),
        "phoneNumber" :userPhoneNumberInput.value.toString(),
        "address" :userAdressInput.value.toString(),
        "email" : userEmailInput.value.toString(),
        "cpf" : userCpfInput.value.toString()
        
    }

    
    var newDiv = document.getElementById("newDiv") as HTMLDivElement;

    newDiv.innerHTML =`

        <div>
            Nome: ${userNameInput.value}
            
        </div>

        <div>
            Sobrenome: ${userLastNameInput.value}
        </div>

        <div>
            Telefone: ${userPhoneNumberInput.value}
        </div>

        <div>
            Endereço: ${userAdressInput.value}
        </div>

        <div>
            Email: ${userEmailInput.value}
        </div>

        <div>
            CPF: ${userCpfInput.value}
        </div>
    

    `;


    axios.get(salesPersonUrl)

    .then((response) => { 

            const dataSalesPerson: Record<string,  {name: String,
                                                    lastName: String,  
                                                    phoneNumber: String, 
                                                    address:String,  
                                                    email:String, 
                                                    cpf:String }> = response.data;


            const dataSalesPersonArray = Object.entries(dataSalesPerson).map(
                ([key, value])=>({
                    key, 
                    ...value

                }));

            

                dataSalesPersonArray.forEach((i) => {
                    
                    const newDiv = document.createElement("div");

                    newDiv.innerHTML =`
                        <div>
                            ==================================
                        </div>
                        <div>
                            Estou em : ${i.key}
                            Nome: ${i.name}
                        </div>
                        <div>
                            Sobrenome: ${i.lastName}
                        </div>
                        <div>
                            Telefone: ${i.phoneNumber}
                        </div>
                        <div>
                            Endereço: ${i.address}
                        </div>
                        <div>
                            Email: ${i.email}
                        </div>
                        <div>
                            CPF: ${i.cpf}
                        </div>
                        <div>
                            ==================================
                        </div>`;
                    
                    document.body.appendChild(newDiv);
              
                    
                })

    })
   

}


async function UserDataPost() {
    const salesPersonUrl1 = "http://localhost:4000/api/vendedor";

    var salesPersonJson = {
            "name": "cvxcvcx",
            "lastName":"jesus",
            "phoneNumber":"2199999999",
            "cpf":"951951951951",
            "email":"sdsad@teste",
            "address":"R. Mexico"   
    }

    await axios.post(salesPersonUrl1,salesPersonJson,
        {
            headers:{
                "Content-Type": "application/json",
            
            }

        }).then((response)=>{

        console.log(response);

    }

    ) 
}




function UserInput(){

    return(
    <div>
        <div className="userInputBody">
            <label>Nome</label>
            <input id= "userName" type="text" />
        </div>
        <div className="userInputBody">
            <label>Sobrenome</label>
            <input id= "userLastName" type="text" />
        </div>
        <div className="userInputBody">
            <label>Telefone</label>
            <input id= "userPhoneNumber" type="text" />
        </div>
        <div className="userInputBody">
            <label>Endereço</label>
            <input id= "userAdress" type="text" />
        </div>
        <div className="userInputBody">
            <label>email</label>
            <input id= "userEmail" type="text" />
        </div>
        <div className="userInputBody">
            <label>cpf</label>
            <input id= "userCpf" type="text" />
        </div>

        <button onClick={UserDataPost}>Enviar</button>
        <button onClick={UserDataGet}>OBTER</button>
        
        <br></br>

        <div id="newDiv"></div>

    </div>
    )
}

export default UserInput;