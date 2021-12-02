import React, {} from 'react'
import "./Main.css"
import { items } from "./items.js"
import { useHistory } from "react-router-dom";
import Caraousel from './Caraousel'

const Main = () => {


    const history = useHistory();



    return (<>
        <section className="whole">
            <div className="middle">
            <h2> My Grocery Store</h2>
            </div>
        <Caraousel/>
         
            <div className="card-main">
                {items.map((item) =>{
                    const { id, image, name, desp} = (item);
                    return <>
                        <div className="cardinner" onClick={()=>{history.push(`/${desp}`)}}>
                        <img src={image} alt={id} />
                        <h2>{name}</h2>
                            </div>

                        </>
                    
                })}
            </div>

        </section>
        </>
    );
}

export default Main