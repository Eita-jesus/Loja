import React from "react";
import './ImageMainHome.css'
import axios from "axios";



async function ProdutosCardsGet(){

    var productsCardsNameInput = document.getElementById("productsCardsName") as HTMLInputElement || null;
    var productsCardsPriceInput = document.getElementById("productsCardsPrice");

    var ProdcardsUlr = "http://localhost:4000/api/vendedor";

    var prodDateJson = {
        "pname" : productsCardsNameInput.value.toString(),
        "pPrice" : productsCardsPriceInput?.ariaValueMax?.toString()
    }
 
    var newdiv = document.getElementById("newDivProdCards") as HTMLInputElement || null; 


    newdiv.innerHTML = `
        <div>
            <div>${productsCardsNameInput.value}</div>
            <div>${productsCardsPriceInput}</div>
        </div>

        <div>
            <div>${productsCardsNameInput.value}</div>
            <div>${productsCardsPriceInput}</div>
        </div>

        <div>
            <div>${productsCardsNameInput.value}</div>
            <div>${productsCardsPriceInput}</div>
        </div>

        <div>
            <div>${productsCardsNameInput.value}</div>
            <div>${productsCardsPriceInput}</div>
        </div>

        <div>
            <div>${productsCardsNameInput.value}</div>
            <div>${productsCardsPriceInput}</div>
        </div>

        <div>
            <div>${productsCardsNameInput.value}</div>
            <div>${productsCardsPriceInput}</div>
        </div>

        <div>
            <div>${productsCardsNameInput.value}</div>
            <div>${productsCardsPriceInput}</div>
        </div>

    `;

//     axios.get(ProdcardsUlr)

//     .then((response) => {
//         const dataProductsCard: Record<string, {



//         }>

//     })

// }


// async function ProdutosCardsPost(ProdcardsUlr){
    

// }








function ImageMainHome() {
    
    return(

        <div className="ImageMain">
            <div>
                <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-model-unselect-gallery-2-202309?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1693010535416"
                alt="Imagem da parte da frente do iPhone 15 Pro Max com tela sem bordas e Dynamic Island no centro da parte superior, e
                imagem da parte de trás do iPhone 15 Pro na cor titânio natural com sistema de câmera Pro no canto superior esquerdo e logotipo da Apple no centro."></img>
            </div>

            <div>
                <div>$6000,00</div>
                <div>IPHONE 15 PRO MAX</div>
            </div>
        </div>



        
    );


}

export default ImageMainHome;