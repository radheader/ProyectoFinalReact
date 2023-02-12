import {Link} from "react-router-dom"

const ItemListContainer = (props) => {
    return(
        <ul>
            <li>
                <Link to="category/Sal">
                    {props.itemUno}
                </Link>
            </li>

            <li>
                <Link to="category/Chocolates">
                    {props.itemDos}
                </Link>
            </li>

            <li>
                <Link to="category/Te">
                    {props.itemTres}
                </Link>
            </li>

            <li>
                <Link to="category/Cafe">
                    {props.itemCuatro}
                </Link>
            </li>

            <li>
                <Link to="category/Miel">
                    {props.itemCinco}
                </Link>
            </li>
        </ul>
    )
}

export default ItemListContainer;