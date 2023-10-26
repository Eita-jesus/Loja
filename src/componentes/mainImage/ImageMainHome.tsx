import React, { useEffect } from "react";
import './ImageMainHome.css'
import ApiCards from "./ApiCards";

function ImageMainHome(){

    useEffect(() =>{

        var matheus = document.getElementById("mainCard") as HTMLDivElement; 
        console.log("divId dentro do componente: ", matheus)

        ApiCards.ProdutosCardsGet(matheus)
        

    })


    return(

        <div id="mainCard" className= "mainCard">
            OLAAAA
        </div>
    )
}


export default ImageMainHome;

























// async function ProdutosCardsGet(){

//     var productsCardsNameInput = document.getElementById("productsCardsName") as HTMLInputElement || null;
//     var productsCardsPriceInput = document.getElementById("productsCardsPrice") as HTMLInputElement;

//     var ProdcardsUlr = "http://localhost:8080/api/vendedor";


//     await axios.get(ProdcardsUlr)
//     .then((response) =>{

//         const dataProdcards: Record<string, {img: string, 
//                                             name: string, 
//                                             price: string}>=response.data;


//             const dataProdCardArray = Object.entries(dataProdcards).map(
//                 ([key, value])=> ({
//                     key, 
//                     ...value
            
//             }));
    
//             dataProdCardArray.forEach((dados) => {

//                 const newCard = document.createElement("div");
        
//                 newdiv.innerHTML = `
//                 <div>
//                     <div>${productsCardsNameInput.value}</div>
//                     <div>${productsCardsPriceInput}</div>
//                 </div>
//                 `;  
        
//                 document.body.appendChild(newCard);
                                            

//     })

//     var prodDateJson = {
//         "pname" : productsCardsNameInput.value.toString(),
//         "pPrice" : productsCardsPriceInput.value.toString()
//     }
 
//     var newdiv = document.getElementById("newDivProdCards") as HTMLInputElement || null; 

//     });



// }

//     function ImageMainHome(){
        
//         return(

//             <div className="ImageMain">
//                 <div>
//                     <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-model-unselect-gallery-2-202309?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1693010535416"
//                     alt="Imagem da parte da frente do iPhone 15 Pro Max com tela sem bordas e Dynamic Island no centro da parte superior, e
//                     imagem da parte de trás do iPhone 15 Pro na cor titânio natural com sistema de câmera Pro no canto superior esquerdo e logotipo da Apple no centro."></img>
//                 </div>

//                 <div>
//                     <div>$6000,00</div>
//                     <div>IPHONE 15 PRO MAX</div>
//                 </div>
//             </div>

//         );

//     }