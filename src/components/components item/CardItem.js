import Image from "./Image";
import "../../styles/CardItem.css"   
import Description from "./Description";
import ButtonDetalles from "./ButtonDetalles";
import ButtonAddCart from "./ButtonAddCart";
import prueba from "../../img/sulpayki_icon.jpg"
import "../../styles/containerCardItems.css"

const CardItem=(props) => {
    return(
        <div className="cardItem.css">
            <Image 
                imagen={props.imagen}
                />
            <Description 
                title={props.title}
                cantidad={props.cantidad}
                precio={props.precio}
                />
            <div className="buttons">
                <ButtonDetalles />
                <ButtonAddCart />
            </div>

        </div>
    )
}

export default CardItem;