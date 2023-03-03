import Brand from "./Brand";
import ItemListContainer from "./ItemsListContainer";
import CartWidget from "./CartWidget";
import ContainerCart from "./ContainerCart";

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
                />
            </nav>

            <div className="containerCart">
                 <CartWidget />
            </div>

            <ContainerCart/>
            
        </header>
    )
}

export default Navbar;