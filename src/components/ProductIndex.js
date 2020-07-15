import React from "react";
import { Link } from "react-router-dom";

const shoes = {
    "NMD-R1-SHOES":{name : "NMD_R1 SHOES" , img : "https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/0b49803254284e418fccaaf00111954c_9366/NMD_R1_Shoes_Black_FV9015_01_standard.jpg"},
    "ULTRABOOST-20-SHOES"  : {name : "ULTRABOOST 20 SHOES" , img : "https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/cd1631e9d6fb48ccaedcaafc0106320f_9366/Ultraboost_20_Shoes_White_EF1042_01_standard.jpg"},
    "QUESTAR-FLOW-SHOES" : {name : "QUESTAR FLOW SHOES", img :"https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/ae89c62c7c1b4687adaaaba5013ea7ab_9366/Questar_Flow_Shoes_Black_FW5111_01_standard.jpg"},
    "BUSENITZ-VULC-2.0-SHOES" : {name : "BUSENITZ VULC 2.0 SHOES", img :"https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/dd4661f9feda4272b4f7ab4101564e35_9366/Busenitz_Vulc_2.0_Shoes_Black_FV5861_01_standard.jpg"},
}



function ProductIndex(){
  
    return(

        
             <ul>
                {Object.entries(shoes).map(([productID, { name, img }]) => (
                <li key={productID}>
                    <Link to={`/launch/${productID}`}>
                        <h2>{name}</h2>
                        <img src={img} alt={name} width = "200px"/>
                    </Link>
                </li>
             ))}
               
             </ul>

    )
}

export default ProductIndex;



