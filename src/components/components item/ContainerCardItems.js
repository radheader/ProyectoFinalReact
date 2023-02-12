import CardItem from "./CardItem";
import fetchSimulation from "../../utils/fetchSimulation";
import productos from "../../utils/products";
import {useState, useEffect} from 'react'
import "../../styles/containerCardItems.css"
import { useParams } from "react-router-dom";

const ContainerCardItems = () => {
    const[ datos, setDatos ] = useState ([]);
    let { idCategory} = useParams();

    useEffect(() => {
        if(idCategory === undefined ){
            fetchSimulation(productos, 2000)
            .then(resp => setDatos(resp))
            .catch(error => console.log(error))
        } else {
            fetchSimulation(productos.filter(filter => filter.type === idCategory),2000)
            .then(resp => setDatos(resp))
            .catch(error => console.log(error))
        }
    },[idCategory])
       
    return(
        <div className="containercardItems">
            {
                datos.map( product => (
                    <CardItem 
                        key={product.id}
                        title={product.title}
                        imagen={product.imageProduct.firtsImage}
                        cantidad={product.stock}
                        precio={product.price}
                    />
                    ))
            }
        </div>
    )
    
}

export default ContainerCardItems