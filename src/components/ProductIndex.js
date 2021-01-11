import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import '../App.css'
const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });
function ProductIndex(){
    const classes = useStyles();
    const shoes = {
        "NMD-R1-SHOES":{product : "NMD_R1 SHOES" , img : "https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/0b49803254284e418fccaaf00111954c_9366/NMD_R1_Shoes_Black_FV9015_01_standard.jpg"},
        "ULTRABOOST-20-SHOES"  : {product: "ULTRABOOST 20 SHOES" , img : "https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/cd1631e9d6fb48ccaedcaafc0106320f_9366/Ultraboost_20_Shoes_White_EF1042_01_standard.jpg"},
        "QUESTAR-FLOW-SHOES" : {product : "QUESTAR FLOW SHOES", img :"https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/ae89c62c7c1b4687adaaaba5013ea7ab_9366/Questar_Flow_Shoes_Black_FW5111_01_standard.jpg"},
        "BUSENITZ-2.0-SHOES" : {product : "BUSENITZ SHOES", img :"https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/dd4661f9feda4272b4f7ab4101564e35_9366/Busenitz_Vulc_2.0_Shoes_Black_FV5861_01_standard.jpg"},
        "STAN-SMITH-SHOES":{product:"LITE RACER ADAPT",img:"https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/69721f2e7c934d909168a80e00818569_9366/Stan_Smith_Shoes_White_M20324_01_standard.jpg"},
        "ULTRABOOST-30-SHOES":{product:"ULTRABOOST 20 SHOES",img:"https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/027954c000b443f682f4ab9d0167a2ba_9366/Ultraboost_20_Shoes_Grey_FY9035_01_standard.jpg"},
        "ZX-2K-4D-SHOES":{product:"ZX 2K 4D SHOES",img:"https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/0dff05dd3dcd4e8d84dcab41011aa40b_9366/ZX_2K_4D_Shoes_Yellow_FV9028_01_standard.jpg"},
        "GAZELLE-SHOES":{product:"GAZELLE SHOES",img:"https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/698e41ae0196408eb16aa7fb008046ad_9366/Gazelle_Shoes_Blue_BB5478_01_standard.jpg"},
        "NMD-R2-SHOES":{product:"NMD_R1 SHOES",img:"https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/73101ab9d9ee445db281ab57011a0229_9366/NMD_R1_Shoes_Blue_FV1734_01_standard.jpg"},
        "D.O.N-ISSUE":{product:"D.O.N. ISSUE",img:"https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/eb8657ce058547c889caaaaa013e54c2_9366/D.O.N._Issue_1_Shoes_Black_EF9908_01_standard.jpg"},
    }
    return(
        <div>
            <ul>
                {Object.entries(shoes).map(([productId , {product  , img}]) =>
                (
                    <li key = {productId}>
                        <Link to = {productId}>
                        
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                    className={classes.media}
                                    image={img}
                                    title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="subtitle1" component="h5">
                                        {product}
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProductIndex;