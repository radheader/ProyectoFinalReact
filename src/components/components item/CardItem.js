import Image from "./Image";
import "../../styles/CardItem.css"   
import Description from "./Description";
import ButtonDetalles from "./ButtonDetalles";
import ButtonAddCart from "./ButtonAddCart";
import prueba from "../../img/sulpayki_icon.jpg"

const CardItem=() => {
    return(
        <div className="cardItem">
            <Image 
                imagen={prueba}
                />
            <Description 
                title="Paquete de sal de Maras del valle Sagrado"
                cantidad={5}
                precio={10}
                />
            <div className="buttons">
                <ButtonDetalles />
                <ButtonAddCart />
            </div>

        </div>
    )
}

export default CardItem;