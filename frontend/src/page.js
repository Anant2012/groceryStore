import React, { useState } from 'react'
import "./pag.css";
import {connect} from 'react-redux';
import { addToCart } from './redux/shopping/shopping-action';

const Main = ({items,addToCart}) => {
    return <>
        <section className="whole">
            <div className="middle">
                <h2>Fruits and Vegetable</h2>
            </div>
            <div className="card">
                {items.map((item) =>{
                    const { id, image, name, details} = (item);
                    return <>
                          <div className="product">
                         <img class="image" src={image} alt={id} />
                         <h2 class="name">{name}</h2>
                         <br></br>
                         <h3 class="price">M.R.P: ₹ {details}</h3>
                         <button className="atc_btn" onClick={() => { addToCart(id) }}>Add to Cart</button>
                        </div>

                    </>
                    
                })}
            </div>

        </section>
        </>
}

const mapDispatchToProps=dispatch=>{
    return{
        addToCart:(id)=>dispatch(addToCart(id)),
    }
}
const mapStateToProps = state =>
{
    return {
        items: state.food.products,
    }
    }
export default connect(mapStateToProps,mapDispatchToProps)(Main);


