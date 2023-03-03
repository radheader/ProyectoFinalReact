import '../../styles/containerCart.css'
import close from "../../img/close.svg"
import clear from "../../img/clear.svg"


const ContainerCart = () => {
    return(
        <div className="cart">

            <div className="cerrar">
                <button className="close">
                    <img src={close}></img>    
                </button>
            </div>

            <div className="containerItemsCart">
            
                {/*por el momento se deja vacio*/}

            </div>  

            <div className="TerminarCompra">
                <button className="terminar">Terminar Compra</button>

                <button className="clear">
                    <img src={clear}></img>
                </button>
            
            </div>


        </div>
        
    )
}

export default ContainerCart