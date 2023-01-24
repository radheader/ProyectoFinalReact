import Brand from "./Brand";
import ItemListContainer from "./ItemsListContainer";

const Navbar = () => {
    return(
        <header>
            <div className="containerBrand">
                <Brand />
            </div>

            <nav className="containerItemList">
                <ItemListContainer
                    itemUno = "Sal de Maras"
                    itemDos = "Chocolates"
                    itemTres = "Te"
                    itemCuatro = "Cafe"
                    itemCinco = "Miel"
                    itemSeis = "Spaguetti"
                />
            </nav>

            <div className="containerCart">

            </div>
        </header>
    )
}

export default Navbar;