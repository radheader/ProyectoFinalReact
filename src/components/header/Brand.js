import brand from "../../img/sulpayki.jpg";
import {Link} from "react-router-dom"

const Brand = () => {
    return (
        <Link to= "/">
        <img src={brand} alt="Tienda Sulpayki" title= "Tienda Sulpayki"></img>
        </Link>
    )
}

export default Brand;

