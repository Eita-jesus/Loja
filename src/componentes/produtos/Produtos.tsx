import React from "react";
import'./Produtos.css'

async function CardPoductsGet() {
  
}





function ProdutosCards(){

    return (
        <div>
        <div className="products">PRODUTOS</div>

            <div id="mainCard" className="mainCard">
                <div>
                    <div className="imagens">
                        <img src="https://http2.mlstatic.com/D_NQ_NP_655145-MLU69738304555_052023-O.webp" alt="" />
                    </div>

                    <div className="NameProducts">
                        <div id="pName">Nome do produto</div>
                        <div id="pPrice">Valor do produto</div>
                    </div>
                    
                </div>
            </div>

        </div>

    );
}


export default ProdutosCards;
