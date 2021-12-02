
import  { useState, useEffect } from 'react';
import "./header.css";
import { Link } from "react-router-dom";
import {connect} from 'react-redux'



const Header = ({ cart, click }) => {
    const time = new Date().toLocaleTimeString();
    const [ctime, setCtime] = useState(time);
    const handler = () => {
        const time = new Date().toLocaleTimeString();
        setCtime(time);
    }
    setInterval(handler, 1000);

    const [len, setLen] = useState(0);
    
    useEffect(()=>{
        let count = 0;
        cart.forEach((item) => {
           count+= item.qty;
        })
        setLen(count);
    },[cart,len,setLen])


    return <>
        <section className="navbar-food">

            <ul className="links">

                <span className="ctime">
                    <h5 >{ctime}</h5>
                </span>

                <div class="searchbox">
                    <form action="/form/submit" method="GET">
                        <input type="text" name="text" class="_3704LK" title="Search for products" autocomplete="off" placeholder="Search for products" /> 
                    </form>
                </div>
                <div className="upper-right">


                    <div className="li-head">

                        {/* <li><Link to="/cart">Recipes</Link></li>  */}

                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/menu">Menu</Link></li>
                        <li><Link to="/cart" className="cart_design">
                            <i className="fas fa-shopping-cart"></i>
                            Cart
                            <span className="cart_badge">{len}</span>
                        </Link></li>
                        <li><Link to="/users" className="user">
                            <i class='fas fa-users'></i>
                        </Link></li>
                    </div>

                    <div className="hamburger_menu" onClick={click}>
                        <div></div>
                        <div></div>

                        <div></div>

                    </div>

                </div>


            </ul>
        </section>
    </>
}

const mapStateToProps=state=>{
    return{
        cart:state.food.cart,
    };
}

export default connect (mapStateToProps)(Header);